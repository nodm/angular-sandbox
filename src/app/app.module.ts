import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { NavigationActionTiming, routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { userFactory } from '~core/providers';
import { LayoutModule } from '~modules/layout';
import { AppRoutingModule } from './app-routing.module';
import {
  STORE_CONFIG,
  STORE_DEVTOOLS_CONFIG,
  STORE_ROUTER_FEATURE_NAME,
} from './app.constants';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(
      {
        [STORE_ROUTER_FEATURE_NAME]: routerReducer,
      },
      STORE_CONFIG,
    ),
    StoreRouterConnectingModule.forRoot({
      navigationActionTiming: NavigationActionTiming.PostActivation,
    }),
    StoreDevtoolsModule.instrument(STORE_DEVTOOLS_CONFIG),
    LayoutModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: userFactory,
      multi: true,
      deps: [HttpClient],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
