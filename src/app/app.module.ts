import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import {MembersModule} from "./members/members.module";
import {SquaresComponent} from "./components/random/squares/squares.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LandingComponent, SignInComponent} from './components/landing/landing.component';
import {FoundersModule} from "./founders/founders.module";

@NgModule({
  declarations: [
    AppComponent,
    SquaresComponent,
    LandingComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    MembersModule,
    FoundersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
