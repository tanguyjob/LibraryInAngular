import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookModel } from '../models/BookModel';
import { UtilService } from './util.service';
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


  getAll() {
    return this.http.get<any[]>(this.util.apiUrl+"Get");
  }

  getBook(id: number) {
 return this.http.get<BookModel>(this.util.apiUrl+"Item?id=" + id);
  }

}

