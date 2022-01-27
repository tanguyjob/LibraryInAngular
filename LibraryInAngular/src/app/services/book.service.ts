import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookModel } from '../models/BookModel';
import { UtilService } from './util.service';
// a effacer
import { BookModel2 } from '../models/BookModel2';
import { BookAuthorModel } from '../models/BookAuthorModel';

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
  return this.http.get<BookAuthorModel[]>("https://localhost:44334/api/Library/ProcedureBookAuthor");
}

getBookAuthorById(id: number) {
  return this.http.get<BookAuthorModel[]>("https://localhost:44334/api/Library/ProcedureBookAuthorById?id=" + id);
}

}
