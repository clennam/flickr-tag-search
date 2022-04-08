import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Input() searchTerm: string = '';
  @Input() view: string = 'expanded';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToResults(): void {
    if (this.searchTerm) {
      this.router.navigate(['/results', this.searchTerm]);
    }
  }

  searchByTag(term?: string): void {
    if (term) {
      this.searchTerm = term;
    }
    this.goToResults();
  }

}
