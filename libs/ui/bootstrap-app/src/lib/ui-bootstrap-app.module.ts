import { ModuleWithProviders, NgModule } from '@angular/core';
import { applicationSetup, CoreAppModule } from '@lens/core/app';
import { AppConfigurator } from '@lens/core/lib';
import { UiBootstrapModule } from '@lens/ui/bootstrap';

const modules = [
  CoreAppModule,
  UiBootstrapModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class UiBootstrapAppModule {
  static using(appConfigurator: AppConfigurator): ModuleWithProviders<UiBootstrapAppModule> {
    return {
      ngModule: UiBootstrapAppModule ,
      providers: applicationSetup(appConfigurator)
    }
  }
}
