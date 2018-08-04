import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServersComponent } from './components/servers/servers.component';
import { ServerService } from './services/server.service';
import { UtilitiesModule } from './feature-modules/utilities/utilities.module';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UtilitiesModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
