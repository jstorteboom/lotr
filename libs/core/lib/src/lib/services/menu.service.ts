import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserContextService } from '.';
import { MenuItem } from '../models';

const menu: MenuItem[] = [
  { title: 'dashboard', route: [ 'dashboard' ] },
  { title: 'books', route: [ 'books' ], requiresAuthentication: true },
  { title: 'characters', route: [ 'characters' ], requiresAuthentication: true }
]

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menuItems$: BehaviorSubject<MenuItem[]> = new BehaviorSubject<MenuItem[]>([]);;
  constructor(private userContext: UserContextService) {
    this.userContext.isSignedIn$.subscribe(isSignedIn => this.pushMenu(isSignedIn));
    this.pushMenu(false);
  }

  addMenuItem(menuItem: MenuItem): void {
    menu.push(menuItem);
    this.pushMenu(this.userContext.isSignedIn$.value);
  }

  private pushMenu(isSignedIn: boolean): void {
    if(isSignedIn) {
      this.menuItems$?.next(menu);
    } else {
      this.menuItems$?.next(menu.filter(menuItem => !menuItem.requiresAuthentication));
    }
  }
}
