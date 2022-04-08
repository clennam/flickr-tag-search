import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  searchTerm: string = '';
  @Input() view: string = 'expanded';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToResults(): void {
    this.router.navigate(['/results']);
  }

}
