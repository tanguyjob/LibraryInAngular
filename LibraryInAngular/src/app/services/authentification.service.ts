import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserBOModel } from '../models/UserBOModel'; 

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
//ajouter
myUser?: UserBOModel;


//----------------
  private isAuth:boolean;
isAuth$!: BehaviorSubject<boolean>;

  constructor(
    private http: HttpClient
  ) {
    this.isAuth=false;
    this.isAuth$= new BehaviorSubject<boolean>(this.isAuth);
   }


   getIsAuthObs() {
     return this.isAuth$ as Observable<boolean>;
   }

   isAuthentificate() {
     return this.isAuth;
   }

  //    signIn(email: string, password: string) {
  //   if(email=="mail@mail.com" && password=="mdp")
  //   {
  //     this.isAuth=true;
  //   }
  //   else
  //   {
  //     this.isAuth=false;
  //   }

  //   this.isAuth$.next(this.isAuth);
  // }

   getUser(){
     return this.myUser;
   }

  signIn(user:UserBOModel ) {
    this.isAuth=true;
    this.isAuth$.next(this.isAuth);
    this.myUser=user;

  }

  signOut() {
    this.isAuth=false;
    this.isAuth$.next(this.isAuth);
  }



  //ajouter
  getUserBO()
{
  return this.http.get<UserBOModel[]>("https://localhost:44334/api/Library/ProcedureUserBO");
}


  getUserBOById(id:number)
{
  return this.http.get<UserBOModel>("https://localhost:44334/api/Library/ProcedureUserBOById?Id="+id);
}

}
