import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageOneRoutingModule } from './page-one-routing.module';
import { PageOneComponent } from './components/page-one/page-one.component';


@NgModule({
  declarations: [
    PageOneComponent,
  ],
  imports: [
    CommonModule,
    PageOneRoutingModule,
  ]
})
export class PageOneModule {
}
