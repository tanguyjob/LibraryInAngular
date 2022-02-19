import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookModel } from '../models/BookModel';
import { UtilService } from './util.service';
import { BookAuthorModel } from '../models/BookAuthorModel';
import { LanguageModel} from '../models/LanguageModel';
import { AuthorModel } from '../models/AuthorModel';

@Injectable({
  providedIn: 'root'
})
export class BookService {
basket:any[]=[];
  constructor(
    private util: UtilService,
    private http: HttpClient
  ) { 
    this.basket=Array(0);
  }

//TestAPIEF
getAllBook() {
   return this.http.get<any[]>("https://localhost:44321/api/Book/List");
}

getAllWriter() {
  return this.http.get<any[]>("https://localhost:44321/api/Book/Writer")
}


//LibraryAPItest
  getAll() {
    return this.http.get<any[]>(this.util.apiUrl+"Get");
  }

  getBook(id: number) {
 return this.http.get<BookModel>(this.util.apiUrl+"Item?id=" + id);
  }



  //libraryTestApi2

getBookWriter() {
  console.log("testprocedure de mon service");
  return this.http.get<any[]>("https://localhost:44305/api/Library/TestProcedure");
}

getUserAddress() {
  return this.http.get<any[]>("https://localhost:44305/api/Library/TestUserAddress");
}

getBookWriterById(id: number) {
  return this.http.get<any[]>("https://localhost:44305/api/Library/TestProcedureId?id=" + id);
}


//LibraryAPIs
getBookAuthor() {
  return this.http.get<BookAuthorModel[]>(this.util.libraryApiUrl+"ProcedureBookAuthor");
}

getBookAuthorById(id: number) {
  return this.http.get<BookAuthorModel[]>(this.util.libraryApiUrl+"ProcedureBookAuthorById?id=" + id);
}

getLanguageById(id: number) {
  return this.http.get<LanguageModel>(this.util.libraryApiUrl+"Language?id="+ id);
}

getAuthors() {
  return this.http.get<AuthorModel[]>(this.util.libraryApiUrl+"Authors");
}

getOneAuthor(id: number) {
  return this.http.get<AuthorModel>(this.util.libraryApiUrl+"Author?id="+id);
}

getBookByAuthorId(id:number)
{
  return this.http.get<BookAuthorModel[]>(this.util.libraryApiUrl+"ProcedureBookByAuthorId?Id="+id);
}




}
