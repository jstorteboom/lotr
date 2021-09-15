import { APP_INITIALIZER, NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookListComponent, DashboardComponent, MenuComponent } from './components';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user-info/user-info.component';
import { BearerInterceptor } from './interceptors/bearer.interceptor';
import { SettingsService } from './services/settings.service';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

const components = [
  BookListComponent, DashboardComponent, MenuComponent, HeaderComponent, UserComponent
];

const imports = [ 
  NgbModule, 
  HttpClientModule,
  RouterModule.forRoot(routes)
];
@NgModule({
  declarations: [AppComponent, ...components],
  imports: [BrowserModule, ... imports],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: BearerInterceptor, 
      multi: true },
    { 
      provide: APP_INITIALIZER, 
      useFactory: (settings: SettingsService) => () => of('https://the-one-api.dev/v2/').pipe(tap(apiUrl => settings.setValue('apiUrl', apiUrl))),
      deps: [SettingsService],
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
