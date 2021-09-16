import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BearerInterceptor } from './interceptors';

const modules = [
  CommonModule,
  HttpClientModule,
  RouterModule
];

@NgModule({
  imports: [
    ...modules
  ],
  exports: [
    ...modules
  ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: BearerInterceptor, 
      multi: true 
    }
  ]
})
export class CoreLibModule {}