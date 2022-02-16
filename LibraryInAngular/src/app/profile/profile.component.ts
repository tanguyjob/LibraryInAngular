import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UserBOModel } from '../models/UserBOModel';
import { AuthentificationService } from '../services/authentification.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
subscr!: Subscription;
user?: UserBOModel;
  constructor(
    private authService: AuthentificationService,
      private router: Router,
  ) { }

 onLogout() {
    this.authService.signOut();
 this.router.navigate(['login']);
  }
  
  
  ngOnInit(): void {

this.user=this.authService.getUser()

    if (this.user != null)
{
     this.subscr = this.authService.getUserBOById(+this.user.userId).subscribe(
      (v)=> {
        this.user=v;
      }
    );
  }
  }


  OnDestroy() {
      this.subscr.unsubscribe();
  }




}
