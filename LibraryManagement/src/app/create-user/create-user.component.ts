import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';

import { AddressModel } from '../models/AddressModel';
import { UserModel } from '../models/UserModel';
import { BookAuthorService } from '../services/book-author.service';
import { Router } from '@angular/router';
import { SubscriptionModel } from '../models/SubscriptionModel' 
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
 subscr!:Subscription;
 subscr2!:Subscription;
 myForm!: FormGroup;
 addresses: AddressModel[]=[]; 
 subscriptions: SubscriptionModel[]=[];

  constructor(
            private fb: FormBuilder,
            private baSrv: BookAuthorService,
            private router: Router
  ) { }

  ngOnInit(): void {
      this.myForm = this.fb.group({
      name:'',
      firstname:'',
      email:'',
      phone:'', 
      address:'',
      subscription:'', 
    });

     this.subscr = this.baSrv.getAddress().subscribe(
      (value)=>this.addresses=value
    ); 

this.subscr = this.baSrv.getSubscription().subscribe(
      (value)=>this.subscriptions=value
    ); 


  }


   onSubmit(form: FormGroup) {
    let myuser = new UserModel();
    myuser.name = form.value.name;
    myuser.firstname = form.value.firstname;
    myuser.email = form.value.email;
    myuser.phone=form.value.phone;
    myuser.isActive=true;
    myuser.fkUserAddress=form.value.address;
    myuser.fkUserSuscription=form.value.subscription;
    myuser.fkUserProfile=1;

    console.log(form.value.subscription);

    this.baSrv.postUser(myuser).subscribe(
        () => {
          this.router.navigate(['/users']);
        }
      );
    // console.log('Valid?', form.valid); // true or false
    // console.log('title', form.value.title);
  }
}


