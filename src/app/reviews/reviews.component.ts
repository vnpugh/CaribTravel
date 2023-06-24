import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  destinations: any[] = [
    { country: 'Aruba' },
    { country: 'Barbados' },
    { country: 'Curacao' },
    { country: 'Jamaica' },
    { country: 'St. Lucia' }
    // Add more destination objects as needed
  ];
  searchQuery: string = '';


  constructor(private router: Router) {}

  searchDestinations() {
    if (this.searchQuery && this.searchQuery.trim() !== '') {
      this.router.navigate(['/destination'], { queryParams: { country: this.searchQuery } });
    }
  }
}
