import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookListItem } from '../../models/book-list-item.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'lotr-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books$!: Observable<BookListItem[]>;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.books$ = this.bookService.getBooks();
  }

}
