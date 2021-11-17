import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
private isAuth:boolean;
isAuth$!: BehaviorSubject<boolean>;
  constructor() {
    this.isAuth=true;
    this.isAuth$= new BehaviorSubject<boolean>(this.isAuth);
   }


   getIsAuthObs() {
     return this.isAuth$ as Observable<boolean>;
   }

   isAuthentificate() {
     return this.isAuth;
   }

     signIn(email: string, password: string) {
    if(email=="mail@mail.com" && password=="mdp")
    {
      this.isAuth=true;
    }
    else
    {
      this.isAuth=false;
    }

    this.isAuth$.next(this.isAuth);
  }

  signOut() {
    this.isAuth=false;
    this.isAuth$.next(this.isAuth);
  }



}
