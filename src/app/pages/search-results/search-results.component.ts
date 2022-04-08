import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  searchTerm: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.searchTerm = this.route.snapshot.paramMap.get('searchTerm') || '';
  }

}
