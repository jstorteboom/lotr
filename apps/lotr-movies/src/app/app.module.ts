import { NgModule } from '@angular/core';
import { AppComponent } from '@lens/core/app';
import { FullLayoutComponent } from '@lens/ui/bootstrap';
import { UiBootstrapAppModule } from '@lens/ui/bootstrap/app';

import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes = [
  {
    path: '',
    component: FullLayoutComponent,
    children: [ 
      { path: '', component: DashboardComponent }
    ]
  }
]

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    UiBootstrapAppModule.using({ rootRoutes: routes })
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
