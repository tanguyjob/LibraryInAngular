import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookAuthorBOModel } from '../models/BookAuthorBOModel';
import { BookAuthorModel } from '../models/BookAuthorModel';
import { BookModel } from '../models/BookModel';
import { AuthorModel } from '../models/AuthorModel';
import { LanguageModel } from '../models/LanguageModel';
import { UserBOModel } from '../models/UserBOModel';
import { AddressModel} from '../models/AddressModel';
import { UserModel } from '../models/UserModel';
import { SubscriptionModel } from '../models/SubscriptionModel';

@Injectable({
  providedIn: 'root'
})
export class BookAuthorService {
readonly baseUrl = "https://localhost:44334/api/Library/";
formData: BookModel= new BookModel();
  constructor(
    private http: HttpClient
  ) { }

  //libraryapi

  getBookAuthor() {
  return this.http.get<BookAuthorBOModel[]>("https://localhost:44334/api/Library/ProcedureBookAuthor");
}

getAddress() {
 return this.http.get<AddressModel[]>("https://localhost:44334/api/Library/Address");
}

getSubscription() {
  return this.http.get<SubscriptionModel[]>("https://localhost:44334/api/Library/Subscriptions");
}

 postBook() {
   return this.http.post(this.baseUrl + "PostBook",this.formData);
 }

postBook2(book: BookModel) {
  return this.http.post(this.baseUrl + "PostBook",book);
}

postAddress(address: AddressModel) {
  console.log('je passe dans le postaddress de mon service');
  return this.http.post(this.baseUrl + "PostAddress",address);
}

postBookAuthor(ba: BookAuthorModel) {
  return this.http.post("https://localhost:44334/api/Library/PostBookAuthor", ba);
}

postUser(user:UserModel) {
  return this.http.post("https://localhost:44334/api/Library/PostUser",user);
}
getBook(){
 return this.http.get<BookModel[]>(this.baseUrl + "Books");
}

getAuthors() {
  return this.http.get<AuthorModel[]>("https://localhost:44334/api/Library/Authors");
}

postAuthor(author:AuthorModel) {
  return this.http.post(this.baseUrl+"PostAuthor",author);
}

getLanguages(){
  return this.http.get<LanguageModel[]>("https://localhost:44334/api/Library/Languages");
}

getUserBO() {
  return this.http.get<UserBOModel[]>("https://localhost:44334/api/Library/GetProcedureUser");
}


}
