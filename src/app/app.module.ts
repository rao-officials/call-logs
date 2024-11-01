import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogsComponent } from './components/logs/logs.component';
import { HttpClientModule } from '@angular/common/http';
import { ConversationHistoryComponent } from './components/conversation-history/conversation-history.component';  // Import HttpClientModule
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LogsComponent,
    ConversationHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
