import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../book';
import { DataserviceService } from '../dataservice.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-scr102-book-display',
  templateUrl: './scr102-book-display.component.html',
  styleUrls: ['./scr102-book-display.component.scss']
})
export class Scr102BookDisplayComponent {
  BooksDisplay:any = [];
  constructor(public ds: DataserviceService){
    this.BooksDisplay = [];
  }
  
  ngOnInit(){
    const localData = localStorage.getItem('EMPlist');
    if(localData != null){
      this.BooksDisplay = JSON.parse(localData);
      console.log("Bookstoisplay:::"+JSON.stringify(this.BooksDisplay));
    }
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      console.log(
        'dropped Event',
        `> dropped '${event.item.data}' into '${event.container.id}'`
      );
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      console.log(
        'dropped Event',
        `> dropped '${event.item.data}' into '${event.container.id}'`
      );
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }


}
