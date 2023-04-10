import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor(
    private router: Router
  ) { }
  
query=true;
  public isCollapsed = true;

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    
  }
  ongocreateList(){
    this.router.navigate(['/app-scr101-book-details']);
this.query=false;
  }
  ongoViewList(){
    this.router.navigate(['/app-books-detail']);
    this.query=false;
  }
  onhome(){
    this.router.navigate(['']);
    this.query=true;
  }

}
