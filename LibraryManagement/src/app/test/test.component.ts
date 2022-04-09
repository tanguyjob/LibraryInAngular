import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { BookModel } from '../models/BookModel';
import { BookAuthorService } from '../services/book-author.service';
import { Router } from '@angular/router';
import { AuthorModel } from '../models/AuthorModel';
import { LanguageModel } from '../models/LanguageModel';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  subscr!:Subscription;
 myForm!: FormGroup;
 languages: LanguageModel[]=[];

constructor(private fb: FormBuilder,
            private baSrv: BookAuthorService,
            private router: Router) {}

  ngOnInit() {
     this.myForm = this.fb.group({
      // name: ['Sam', Validators.required],
      // email: ['', [Validators.required, Validators.email]],
      // message: ['', [Validators.required, Validators.minLength(5)]],
      //ajouter
      title:'',
      dateBook:'',
      resume:'',
      language:[null]
      // country:[null]
    });
  
    this.subscr = this.baSrv.getLanguages().subscribe(
      (value)=>this.languages=value
    );
  
  
  }


  onSubmit(form: FormGroup) {
    let mybook = new BookModel();
    mybook.title = form.value.title;
    mybook.dateBook = form.value.dateBook;
    mybook.resume = form.value.resume;
    mybook.fkBookLanguage=form.value.language;
    mybook.activeBook=true;
    this.baSrv.postBook2(mybook).subscribe(
        () => {
          this.router.navigate(['/home']);
        }
      );;
    console.log('Valid?', form.valid); // true or false
    console.log('title', form.value.title);
    console.log('date', form.value.dateBook);
    console.log('résumé', form.value.resume);
    console.log('fklanguage', mybook.fkBookLanguage);
    console.log('activebook', mybook.activeBook);
    console.log('id de ma langue',form.value.language);
  }
}
