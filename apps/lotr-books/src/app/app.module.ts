import { NgModule } from '@angular/core';
import { AppComponent } from '@lens/core/app';
import { UiBootstrapAppModule } from '@lens/ui/bootstrap/app';

import { routes } from './app.routes';
import { providers } from './app.providers';

import { BookListComponent, DashboardComponent } from './components';

const components = [
  BookListComponent, 
  DashboardComponent
];

const applicationConfiguration = { 
  rootRoutes: routes 
};
@NgModule({
  declarations: components,
  imports: [
    UiBootstrapAppModule.using(applicationConfiguration)
  ],
  providers: providers,
  bootstrap: [AppComponent],
})
export class AppModule {}
