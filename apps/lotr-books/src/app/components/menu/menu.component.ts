import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MenuItem } from '../../models';

@Component({
  selector: 'lotr-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuItems$!: Observable<MenuItem[]>;
  currentItem?: MenuItem;

  ngOnInit(): void {
    this.menuItems$ = of([
      { title: 'dashboard', route: [ 'dashboard' ] },
      { title: 'books', route: [ 'books' ] }
    ]);
  }
}
