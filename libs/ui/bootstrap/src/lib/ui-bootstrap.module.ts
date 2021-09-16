import { NgModule } from '@angular/core';
import { CoreLibModule } from '@lens/core/lib';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent, MenuComponent, UserInfoComponent, FullLayoutComponent } from './components';

const components = [
  HeaderComponent,
  MenuComponent,
  UserInfoComponent,
  FullLayoutComponent
];

@NgModule({
  declarations: components,
  imports: [
    CoreLibModule,
    NgbModule
  ],
  exports: [FullLayoutComponent]
})
export class UiBootstrapModule {}
