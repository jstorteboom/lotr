import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { AppConfigurator, CoreLibModule } from '@lens/core/lib';
import { AppComponent } from './components/app/app.component';

@NgModule({
  imports: [
    CoreLibModule,
    BrowserModule, 
    RouterModule.forRoot([])
  ],
  declarations: [
    AppComponent
  ],
  exports: [
    CoreLibModule,
    RouterModule,
    BrowserModule
  ]
})
export class CoreAppModule {
  static using(appConfigurator: AppConfigurator): ModuleWithProviders<CoreAppModule> {
    return {
      ngModule: CoreAppModule,
      providers: applicationSetup(appConfigurator)
    }
  }
}

export function applicationSetup(appConfigurator: AppConfigurator) {
  return [
    {
      provide: APP_INITIALIZER,
      useFactory: (router: Router) => () => router.resetConfig(appConfigurator.rootRoutes),
      deps: [Router],
      multi: true
    }
  ]
}
