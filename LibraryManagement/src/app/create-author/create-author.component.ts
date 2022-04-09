import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';

import { AuthorModel } from '../models/AuthorModel';
import { BookAuthorService } from '../services/book-author.service';
import { Router } from '@angular/router';

import { LanguageModel } from '../models/LanguageModel';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.css']
})
export class CreateAuthorComponent implements OnInit {
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
      name:'',
      firstname:'',
      birthdate:''
    });
  }

  onSubmit(form: FormGroup) {
    let myAuthor = new AuthorModel();
    myAuthor.name = form.value.name;
    myAuthor.firstname = form.value.firstname;
    myAuthor.birthdate = form.value.birthdate;
    myAuthor.isActive=true;
    
    
    this.baSrv.postAuthor(myAuthor).subscribe(
        () => this.router.navigate(['/author']),
      );
    // console.log('Valid?', form.valid); // true or false
    // console.log('title', form.value.title);
  }
}
