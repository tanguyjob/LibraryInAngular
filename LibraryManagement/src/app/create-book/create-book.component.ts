import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';

import { BookModel } from '../models/BookModel';
import { BookAuthorService } from '../services/book-author.service';
import { Router } from '@angular/router';

import { LanguageModel } from '../models/LanguageModel';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
 subscr!:Subscription;
 myForm!: FormGroup;
 languages: LanguageModel[]=[];
  constructor(
            private fb: FormBuilder,
            private baSrv: BookAuthorService,
            private router: Router
  ) { }

ngOnInit() {
     this.myForm = this.fb.group({
      title:'',
      dateBook:'',
      resume:'',
      language:[null]
    });

    this.subscr = this.baSrv.getLanguages().subscribe(
      (value)=>this.languages=value
    );  
  }




  ngOnDestroy() {
    this.subscr.unsubscribe();
  }
  
  onSubmit(form: FormGroup) {
    let mybook = new BookModel();
    mybook.title = form.value.title;
    mybook.dateBook = form.value.dateBook;
    mybook.resume = form.value.resume;
    mybook.fkBookLanguage=form.value.language;
    mybook.activeBook=true;
    console.log("ma langue",form.value.language);
    this.baSrv.postBook2(mybook).subscribe(
        () => {
          this.router.navigate(['/home']);
        }
      );;
    // console.log('Valid?', form.valid); // true or false
    // console.log('title', form.value.title);

  }
}
