import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookService } from "./book.service";
import { BsDropdownConfig, BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TitleFilterPipe } from './Bookfiterpipe';
import { BookDisplayComponent } from './book-display/book-display.component';
import { SCR101BookDetailsComponent } from './scr101-book-details/scr101-book-details.component';
import { Scr102BookDisplayComponent } from './scr102-book-display/scr102-book-display.component';
import { HttpClientModule } from '@angular/common/http';
import { NamefilterPipe } from './namefilter.pipe';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ChangecolorService } from './changecolor.service';

export const BS_DROPDOWN_DEFAULT = {
  isAnimated: false,
  autoClose: true
};


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TitleFilterPipe,
    BookDisplayComponent,
    SCR101BookDetailsComponent,
    Scr102BookDisplayComponent,
    NamefilterPipe
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatListModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    DragDropModule,
    BsDropdownModule.forRoot(),
    
    
    
   
    
    
    
  ],
  providers: [{provide: BsDropdownConfig,
    useValue: BS_DROPDOWN_DEFAULT },
    BookService,
    ChangecolorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
