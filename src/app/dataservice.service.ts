import { Injectable } from '@angular/core';
import { SCR101BookDetailsComponent } from './scr101-book-details/scr101-book-details.component';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor() { }
  public objbookitem = [];
}
