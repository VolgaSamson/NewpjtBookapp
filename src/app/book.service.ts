import { Injectable } from "@angular/core";
import { Book } from './book';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class BookService {
  books: any= [];
 
  
  //console.log("booklength"+JSON.stringify(books));
  
  // addBook(book:any[]) {
  //   console.log("booklength"+JSON.stringify(book));
  //   for(let i=0;i<this.addBook.length;i++){
  //   this.books.push(book[i]);
  //   }
    
  // }
    
  baseUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get<Book[]>(this.baseUrl);
  }

  postEmployee(employee: Book) {
    return this.http.post<Book>(this.baseUrl, employee);
  }

  deleteEmployee(id: string) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
  }

