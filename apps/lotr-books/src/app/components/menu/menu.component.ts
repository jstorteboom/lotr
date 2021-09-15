import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from '../../models';
import { MenuService } from '../../services';

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
