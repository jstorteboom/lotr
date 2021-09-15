import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { MenuItem } from '../../models';
import { UserContextService } from '../../services';

const menuItems = [
  { title: 'dashboard', route: [ 'dashboard' ] },
  { title: 'books', route: [ 'books' ], requiresAuthentication: true },
  { title: 'characters', route: [ 'characters' ], requiresAuthentication: true }
]
@Component({
  selector: 'lotr-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  private isSignedIn = false;

  constructor(private userContext: UserContextService) {
  }

  menuItems$!: Observable<MenuItem[]>;
  currentItem?: MenuItem;

  ngOnInit(): void {
    this.menuItems$ = this.userContext.isSignedIn$.pipe(
        switchMap(isSignedIn => { 
          this.isSignedIn = isSignedIn;
          return of(menuItems);
        }),
        map(menuItems => {
          if(this.isSignedIn) {
            return menuItems;
          } else {
            return menuItems.filter(menuItem => !menuItem.requiresAuthentication);
          }
        })
      );
  }
}
