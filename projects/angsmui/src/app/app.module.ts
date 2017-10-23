import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserReviewComponent } from './user-review/user-review.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    UserReviewComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
