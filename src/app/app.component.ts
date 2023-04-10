import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, Inject, Renderer2 } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';
import { interval } from 'rxjs/internal/observable/interval';
import { Subscription } from 'rxjs/internal/Subscription';
import { DOCUMENT } from '@angular/common';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(200)
      ]),
      transition('* => void', [
        animate(200, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class AppComponent {
 
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private renderer: Renderer2, 
     @Inject(DOCUMENT) 
    private document:any,
  ){}
  title = 'Book-app';
  index: number = 0;
  numImages: number = 2;
  imagesLoaded: number = 0;
  loading: boolean = true;
  subscription?: Subscription;
  query=true;
  
  imagesUrl = [
    "../assets/image0.jpg",
    "../assets/image1.jpg",
    ]

  ngOnInit() {

    this.subscription = this.router.events.subscribe((route)=>{
      if(route instanceof NavigationEnd)
      {
        if(route.url ===
          '')
          {
            this.query=true;
          }
          else
          if(route.url ===
            '/app-scr101-book-details')
            {
              this.query=false;
            }
            else
            if(route.url ===
              '/app-scr102-book-display')
              {
                this.query=false;
              }

      }

    });
    this.imagesUrl.forEach((x, index) => {
      const image = new Image();
      image.onload = (() => {
        this.imagesLoaded++;
        this.loading = (this.imagesLoaded != this.numImages)
      })
      image.src = x
    })
    interval(5000).subscribe(() => {
      if (!this.loading)
        this.index = (this.index + 1) % this.numImages
    })
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(map((route) => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }))
      .pipe(filter((route) => route.outlet === 'primary'))
      .pipe(mergeMap((route) => route.data))
      .subscribe((data) => this.updateBodyClass(data?.['bodyClass']));

    
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
  private updateBodyClass(customBodyClass?: string) {
    this.renderer.setAttribute(this.document?.body, 'class', '');
    if (customBodyClass) {
      this.renderer.addClass(this.document?.body, customBodyClass);
    }
  }
  
  ongocreateList(){
    this.router.navigate(['/app-scr101-book-details']);
this.query=false;
  }
  ongoViewList(){
    this.router.navigate(['/app-scr102-book-display']);
    this.query=false;
  }
  onhome(){
    this.router.navigate(['']);
    this.query=true;
  }
  
 
  @HostListener('window:scroll', ['$event']) 
  onWindowScroll(e:Event) {
    // Your Code Here
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }

  }
}
