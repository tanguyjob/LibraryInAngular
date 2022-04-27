import { Component, OnInit } from '@angular/core';
import { BookAuthorService } from '../services/book-author.service';
import { UserBOModel } from '../models/UserBOModel';
import { Subscription } from 'rxjs';
import { Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:UserBOModel[]=[];
  subscribe!:Subscription
  constructor(
    private bookauthorService: BookAuthorService,
    private router: Router
  ) { }

    ngOnInit(): void {
    this.subscribe = this.bookauthorService.getUserBO().subscribe(
      (value)=>this.users=value
    );
  }

}
