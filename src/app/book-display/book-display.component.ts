import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-display',
  templateUrl: './book-display.component.html',
  styleUrls: ['./book-display.component.scss']
})
export class BookDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  books=[{
    title:"Dune",
    author:"Frank Herbert",
    imgUrl:"assets/image5.jpg",
    year:1965
    },
    {
      title:"Ender's Game",
      author:"Orson Scott Card",
      imgUrl:"assets/image6.jpg",
      year:1985
  },
  {
    title:"1984",
    author:"George Orwell",
    imgUrl:"assets/image7.jpg",
    year:1949
},
{
  title:"Farenheit 451",
  author:"Ray Bradbury",
  imgUrl:"assets/image8.jpg",
  year:1953
},
{
  title:"Brave New World",
  author:"Aldous Huxley",
  imgUrl:"assets/image9.jpg",
  year:1932
}];
title: string = '';
title1: string = '';
}
