import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailComponent, CharacterListComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: CharacterListComponent,
  },
  {
    path: ':id',
    component: CharacterDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
