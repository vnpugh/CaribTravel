import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RoutingModule} from './routing/routing.module';
import { AppComponent } from './app.component';

import { HomepageComponent } from './homepage/homepage.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,

     HomepageComponent,
     DestinationsComponent,
     ReviewsComponent,

  ],
  imports: [
    BrowserModule,
    RoutingModule,
    RouterModule.forRoot([ { path: '', component: HomepageComponent }]),
    HttpClientModule,
    FormsModule

  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]

})
export class AppModule { }
