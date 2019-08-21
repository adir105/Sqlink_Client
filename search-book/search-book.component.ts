import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoogleBooksService } from '../services/google-books.service';
import { Book } from '../view-models/Book';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsComponent } from './book-details/book-details.component';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {

  public userName: string;
  public books: Book[];
  private readonly USER_NAME_PARAMETER_URL: string = 'username';

  constructor(private _route: ActivatedRoute, private _googleBooksService: GoogleBooksService, private _dialog: MatDialog) { }

  ngOnInit() {
    this.extractUsername(this.USER_NAME_PARAMETER_URL);
    this.getBooksApi('The');
  }

  /**
   * This method open book-details component for more details.
   * @param book
   */
  public onClickBook(book: Book){

    this._dialog.open(BookDetailsComponent, {
      maxWidth: '350px',
      maxHeight: '500px',
      data: {id: book.id, title: book.title, smallThumbnail: book.smallThumbnail, description: book.description}
    });

  }

  /**
   * This method get all books by str parameter from api.
   * @param str This method 
   */
  private getBooksApi(str: string){
    this._googleBooksService.getBooks(str).subscribe(
      (response) => {
        this.books = response.items.map(x => new Book (x.id,
                                                       x.volumeInfo.title,
                                                       x.volumeInfo.imageLinks ? x.volumeInfo.imageLinks.smallThumbnail : '',
                                                       x.volumeInfo.description));
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('Done get books from Google Books API');
      }
    );
  }

  /**
   * This method invoke getBooksApi method when input search changed.
   * @param event 
   */
  public onSearchBookChange(event){
    if(event.length > 1){
      this.getBooksApi(event);
    }
  }

  /**
   * This method extract value by parameter from url.
   */
  extractUsername(paramter: string) {
    this.userName = this._route.snapshot.paramMap.get(paramter);
  }

}
