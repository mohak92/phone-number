import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { PhoneMaskDirective } from './phonemask.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        BrowserModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        PhoneMaskDirective
    ],
    exports: [
        PhoneMaskDirective
      ],
    bootstrap: [AppComponent]
})

export class AppModule { }