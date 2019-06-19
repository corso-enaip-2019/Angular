import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ProfileComponent } from "./components/profile/profile.component";
import { DataService } from './services/data-service';
import { SampleList } from './components/sample-list/sample-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SampleList
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
