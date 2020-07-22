import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextareaModule } from 'primeng/inputtextarea';



@NgModule({
   declarations: [
      AppComponent,
      ChallengeComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ButtonModule,
      DialogModule,
      BrowserAnimationsModule,
      DropdownModule,
      FormsModule,
      InputTextModule,
      CheckboxModule,
      InputTextareaModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
