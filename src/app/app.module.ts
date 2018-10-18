import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { StubsMocksSpiesComponent } from './components/stubs-mocks-spies/stubs-mocks-spies.component';

@NgModule({
  declarations: [
    AppComponent,
    StubsMocksSpiesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
