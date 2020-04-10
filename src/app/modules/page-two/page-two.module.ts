import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageTwoRoutingModule } from './page-two-routing.module';
import { PageTwoComponent } from './components/page-two/page-two.component';


@NgModule({
  declarations: [
    PageTwoComponent,
  ],
  imports: [
    CommonModule,
    PageTwoRoutingModule,
  ]
})
export class PageTwoModule {
}
