
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Book } from '../book';
import { BookService } from '../book.service';
import { DataserviceService } from '../dataservice.service';

import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-scr101-book-details',
  templateUrl: './scr101-book-details.component.html',
  styleUrls: ['./scr101-book-details.component.scss']
})
export class SCR101BookDetailsComponent {
  @ViewChild('fileInput') fileInput: any;
  @ViewChild('file')
      file!: {
        nativeElement: { click: () => void; files: { [key: string]: File; }; };
      };
    public files: Set<File> = new Set();
    p!: number;
  @ViewChild('addBookButton') addBookButton: any;
  
  

  // TasksItem: FormGroup;

  Books = [];
  
  BooksToDisplay:any[] = [];
  books:any[] = [];
  
  
  taskdisplay = true;
  
  listname?: string;
  oldbutton = true;
  newbutton = false;
  title1: string = '';
  
  
  constructor(
    private fb: FormBuilder,
    public ds: DataserviceService,
    private bookService: BookService
  ) {
    // this.TasksItem = fb.group({});
    this.Books = [];
    this.BooksToDisplay = this.Books;
    
  }

  ngOnInit(): void {
   
    // this.bookService.getEmployees().subscribe((res) => {
    //   for (let emp of res) {
    //     this.Books.unshift(emp);
    //   }
    //   this.BooksToDisplay = this.Books;
    //   console.log("Bookstoisplay"+JSON.stringify(this.BooksToDisplay));
    // });
    
    const localData = localStorage.getItem('EMPlist');
    if(localData != null){
      this.BooksToDisplay = JSON.parse(localData);
      console.log("Bookstoisplay"+JSON.stringify(this.BooksToDisplay));
    }
  
     
  }

  ngAfterViewInit(): void {
    
  }
  
    

  
  deleteBookClicked(i:number) {
    let ind = this.BooksToDisplay.indexOf((this.BooksToDisplay[i]));
    if(ind > -1){
      this.BooksToDisplay.splice(ind-1,2);
    
    }
    localStorage.setItem('EMPlist',JSON.stringify(this.BooksToDisplay));
    console.log("deleteitemsss"+i);
    
  }
  deleteoneBookClicked(books:any[],j:number){
    console.log("new");
    books.splice(j,1);
    localStorage.setItem('EMPlist',JSON.stringify(this.BooksToDisplay));
    
  }
  savenewadd(){
    this.taskdisplay = false;
    console.log("1");
    console.log("books:::"+JSON.stringify(this.books));
    for(let i=0;i<this.documentdata.length;i++){
    this.books.push(this.documentdata.at(i).value);
    }
    console.log("books2:::"+JSON.stringify(this.books));
    localStorage.setItem('EMPlist',JSON.stringify(this.BooksToDisplay));
    
  }
 
  addnewbutton(books:any[]){
    this.oldbutton = false;
    this.newbutton = true;
    let ind = books.length;
     this.addBookButton.nativeElement.click();
    this.books = books;
    console.log("bookslength"+ind);
    return this.books;
    
  }
 
  

  editBookClicked(i:number) {
    this.addBookButton.nativeElement.click();
  }

  

  
  // clearForm() {
  //   this.title.setValue('');
  //   this.year.setValue('');
  //   this.author.setValue('');
  //   this.fileInput.nativeElement.value = '';
  // }

  // public get title(): FormControl {
  //   return this.BookForm.get('title') as FormControl;
  // }
  // public get year(): FormControl {
  //   return this.BookForm.get('year') as FormControl;
  // }
  // public get task(): FormControl {
  //   return this.TasksItem.get('task') as FormControl;
  // }

  
  
  TasksItem: FormGroup=this.fb.group({
    
    task: new FormControl('')
    
    });

  DocumentItem: FormGroup=this.fb.group({
    documentitem:this.fb.array([]),
    
    
    });
      
      get documentdata(){
        return this.DocumentItem.get('documentitem') as FormArray;
      }
      
      get DocumentFlexRow()
      {
        return this.fb.group({
          title: [""],
          author: [""],
          year: [""],
          imgUrl: [""],
    
          });
      }
    additem():void{
      this.documentdata.push(this.DocumentFlexRow);
    }
    
    deleteitem(i:number){
      this.documentdata.removeAt(i);
      
    }
    allowedFileType = ['application/JPG'];
    maxFileSize = 10485760;
    addFiles(i: number){
      this.p = i;
      this.file.nativeElement.click();
    }
    onFilesAdded(){
      const files: { [key: string]: File} = this.file.nativeElement.files;
      for (let key in files){
                  this.files.add(files[key]);
          this.documentdata.at(this.p).patchValue({imgUrl : files});
          this.documentdata.at(this.p).patchValue({imgUrl : this.file.nativeElement.files[0].name,
          });
      }
    }
    
    
    save(){
      
        
        
      
      console.log("data"+JSON.stringify(this.DocumentItem.value['documentitem']));
      const isData = localStorage.getItem("EMPlist");
      
      if(isData == null){
      
        const newarr = [];
        newarr.push(this.TasksItem.value);
        newarr.push(this.DocumentItem.value['documentitem']);
        localStorage.setItem('EMPlist',JSON.stringify(newarr));
        console.log("neww"+newarr);
        
        
      }
      
      else {
        
          console.log("3:::");
        const olddata = JSON.parse(isData);
        olddata.push(this.TasksItem.value);
        olddata.push(this.DocumentItem.value['documentitem']);       
        localStorage.setItem('EMPlist',JSON.stringify(olddata));
        
        
      }
    
      
        window.location.reload();
    
      
      
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
