import { Component, OnInit } from '@angular/core';
import { MenuItem, MenuService } from '@lens/core/lib';
import { Observable } from 'rxjs';

@Component({
  selector: 'lotr-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  menuItems$!: Observable<MenuItem[]>;
  currentItem?: MenuItem;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuItems$ = this.menuService.menuItems$;
  }
}
