import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { userFactory } from '~core/providers'
import { LayoutModule } from '~modules/layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
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
