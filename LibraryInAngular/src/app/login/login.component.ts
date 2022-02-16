import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserBOModel } from '../models/UserBOModel';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  subscr!: Subscription;
   isAuth!:boolean;
   userArray: UserBOModel[]=[];
   user?: UserBOModel;

  constructor(private authSrv: AuthentificationService,
              private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient) {
   }

  ngOnInit(): void {
     this.isAuth = this.authSrv.isAuthentificate();

      this.authSrv.getUserBO().subscribe(
      (value)=> this.userArray=value
    );
    //  this.http.get<UserBOModel[]>("https://localhost:44334/api/Library/ProcedureUserBO").subscribe(
    //   (value)=> this.userArray=value
    // );
  }

  // onLogin(form:NgForm) {
  //   if (!form.invalid){
  //     console.log(form.value.login, form.value.password);
  //     this.authSrv.signIn(form.value.login, form.value.password);
  //     this.isAuth= this.authSrv.isAuthentificate();
  //     const ru = this.route.snapshot.params['ru'];
  //     if (ru != null)
  //       this.router.navigate([ru]);
  //   }
  // }

 onLogin(form:NgForm) {
  // this.authSrv.signIn(form.value.login, form.value.password);
    if (!form.invalid){
      let us= this.userArray.find(x=>x.email == form.value.email);
      if (us != null)
      {
        this.authSrv.signIn(us);
      }
    //   console.log(form.value.login, form.value.password);
    //   this.authSrv.signIn(form.value.login, form.value.password);
       this.isAuth= this.authSrv.isAuthentificate();
       const ru = this.route.snapshot.params['ru'];
       if (ru != null)
         this.router.navigate([ru]);
   }
  }



  onLogout() {
    this.authSrv.signOut();
    this.isAuth = this.authSrv.isAuthentificate();
  }


  
}