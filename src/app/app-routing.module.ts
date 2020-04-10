import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PAGE_ONE_PATH, PAGE_TWO_PATH } from '~shared/constants';


const routes: Routes = [
  {
    path: PAGE_ONE_PATH,
    loadChildren: () => import('~modules/page-one/page-one.module').then(({ PageOneModule }) => PageOneModule),
  },
  {
    path: PAGE_TWO_PATH,
    loadChildren: () => import('~modules/page-two/page-two.module').then(({ PageTwoModule }) => PageTwoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
