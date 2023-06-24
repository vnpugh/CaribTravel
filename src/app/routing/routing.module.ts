import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
import { DestinationsComponent } from '../destinations/destinations.component';
import { ReviewsComponent } from '../reviews/reviews.component';

const routes: Routes = [
  { //home
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { //home
    path: 'home',
    component: HomepageComponent
  },
  {  //destinations
    path: 'destinations',
    component: DestinationsComponent
  },
  {   //reviews
    path: 'reviews',
    component: ReviewsComponent
  },
  {  // country from destination dropdown
    path: 'destination/:country',
    component: DestinationsComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
