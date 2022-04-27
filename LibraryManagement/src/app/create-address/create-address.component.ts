import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';

import { AddressModel } from '../models/AddressModel';
import { BookAuthorService } from '../services/book-author.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-create-address',
  templateUrl: './create-address.component.html',
  styleUrls: ['./create-address.component.css']
})
export class CreateAddressComponent implements OnInit {
 subscr!:Subscription;
 myForm!: FormGroup;
 address: AddressModel[]=[];
  constructor(
    private fb: FormBuilder,
    private baSrv: BookAuthorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      city:'',
      postCode:'',
      street:'',
      number:'',
      box:''
    });
  }

  ngOnDelete() {
    this.subscr.unsubscribe();
  }

  onSubmit(form: FormGroup) {
      let myAddress = new AddressModel();
      myAddress.city=form.value.city;
      myAddress.postCode=form.value.postCode;
      myAddress.street=form.value.street;
      myAddress.number=form.value.number;
      myAddress.box=form.value.box;
  
      this.subscr=this.baSrv.postAddress(myAddress).subscribe(
        () => this.router.navigate(['/users']),
      );
    }
    


  



}
