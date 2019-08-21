import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SearchBookComponent } from './search-book.component';
import { HttpClientModule } from '@angular/common/http';
import { GoogleBooksService } from '../services/google-books.service';
import { BookDetailsComponent } from './book-details/book-details.component';
import { MaterialModule } from '../material.module';


const routes: Routes = [
  { path: '', component: SearchBookComponent }
];

@NgModule({
  declarations: [SearchBookComponent, BookDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MaterialModule 
  ],
  providers: [GoogleBooksService],
  entryComponents: [BookDetailsComponent]
})
export class SearchBookModule { }
