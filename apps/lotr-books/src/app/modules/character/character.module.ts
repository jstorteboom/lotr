import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { MenuService } from '@lens/core/lib';

@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterDetailComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule
  ]
})
export class CharacterModule { 
  constructor(menuService: MenuService) {
    menuService.addMenuItem({ title: 'Character details', route: ['characters', 'abc'], requiresAuthentication: true })
  }
}
