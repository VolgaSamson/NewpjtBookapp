import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SCR101BookDetailsComponent } from './scr101-book-details/scr101-book-details.component';
import { Scr102BookDisplayComponent } from './scr102-book-display/scr102-book-display.component';

const routes: Routes = [
  
  
  
  {
    path: 'app-scr102-book-display',
    component: Scr102BookDisplayComponent,
    data: { bodyClass: 'red' }
    
  },
  {
    path: 'app-scr101-book-details',
    component: SCR101BookDetailsComponent,
    data: { bodyClass: 'red' }
    
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
