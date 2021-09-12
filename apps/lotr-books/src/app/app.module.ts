import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookListComponent, DashboardComponent, MenuComponent } from './components';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

const components = [
  BookListComponent, DashboardComponent, MenuComponent
];

const imports = [ 
  NgbModule, 
  HttpClientModule,
  RouterModule.forRoot(routes)
];
@NgModule({
  declarations: [AppComponent, ...components],
  imports: [BrowserModule, ... imports],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
