import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   isAuth!:boolean;
  constructor(private authSrv: AuthentificationService,
              private route: ActivatedRoute,
              private router: Router) {
   }

  ngOnInit(): void {
     this.isAuth = this.authSrv.isAuthentificate();
  }

  onLogin(form:NgForm) {
    if (!form.invalid){
      console.log(form.value.login, form.value.password);
      this.authSrv.signIn(form.value.login, form.value.password);
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