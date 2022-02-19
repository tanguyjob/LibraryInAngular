import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
apiUrl="https://localhost:44308/api/Book/";
libraryApiUrl="https://localhost:44334/api/Library/";
  constructor() { }
}
