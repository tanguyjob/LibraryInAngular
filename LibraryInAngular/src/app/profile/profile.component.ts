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
userBOs: UserBOModel[]=[];
  constructor(
    private authService: AuthentificationService
  ) { }

  ngOnInit(): void {
     this.subscr = this.authService.getUserBOById(5).subscribe(
      (v)=> {
        this.userBOs=v;
      }
    );
  }

}
