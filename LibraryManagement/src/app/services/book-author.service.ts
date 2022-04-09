import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookAuthorBOModel } from '../models/BookAuthorBOModel';
import { BookAuthorModel } from '../models/BookAuthorModel';
import { BookModel } from '../models/BookModel';
import { AuthorModel } from '../models/AuthorModel';
import { LanguageModel } from '../models/LanguageModel';
import { UserBOModel } from '../models/UserBOModel';

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

 postBook() {
   return this.http.post(this.baseUrl + "PostBook",this.formData);
 }

postBook2(book: BookModel) {
  return this.http.post(this.baseUrl + "PostBook",book);
}

postBookAuthor(ba: BookAuthorModel) {
  return this.http.post("https://localhost:44334/api/Library/PostBookAuthor", ba);
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
