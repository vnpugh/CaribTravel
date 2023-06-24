import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HomepageService } from './../homepage/homepage.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent {
  destinations: any[];
  searchQuery: string = '';

  constructor(
    private route: ActivatedRoute,
    private homepageService: HomepageService,
    private router: Router
  ) {
    this.destinations = [
      { country: 'Country 1' },
      { country: 'Country 2' }
      // Add more destination objects as needed
    ];

    this.homepageService.subject.subscribe(query => {
      this.searchDestinations();
    });
  }

  searchDestinations() {
    if (this.searchQuery && this.searchQuery.trim() !== '') {
      this.router.navigate(['/destination'], { queryParams: { country: this.searchQuery } });
    }
  }
}


