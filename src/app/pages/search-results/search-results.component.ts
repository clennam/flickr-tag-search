import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { SearchService } from '../../core/search/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  searchTerm: string = '';
  imageResults: any;
  hiRes: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private searchService: SearchService) { }

  changeResolution() {
    // difference between mid res and hi res flickr src urls is a simple prefix
    // we can easily fetch better res images by running a simple string replace
    let findPrefix = this.hiRes ? 'm.jpg' : 'b.jpg';
    let replacePrefix = this.hiRes ? 'b.jpg' : 'm.jpg';

    for (let item of this.imageResults?.items) {
      item.media.m = item.media.m.replace(findPrefix, replacePrefix);
    }
  }

  ngOnInit(): void {
    this.searchByTag();
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.searchByTag();
      });
  }

  searchByTag(): void {
    this.searchTerm = this.route.snapshot.paramMap.get('searchTerm') || '';

    if (this.searchTerm) {
      this.searchService.searchByTag(this.searchTerm).subscribe(results => {
        this.imageResults = results;
      });
    }
  }
}

// TODO: modal
// TODO: animations?