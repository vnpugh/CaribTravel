import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  destinations: any[] = [
    { country: 'Country 1' },
    { country: 'Country 2' },
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

