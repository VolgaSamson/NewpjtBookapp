import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangecolorService {
  public changeNavColor = new Subject<any>();
  constructor() { }
}
