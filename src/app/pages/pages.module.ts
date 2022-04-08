import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './search-page/search-page.component';
import { FunctionalsModule } from '../functionals/functionals.module';
import { SearchResultsComponent } from './search-results/search-results.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SearchPageComponent,
    SearchResultsComponent
  ],
  imports: [
    CommonModule,
    FunctionalsModule,
    FormsModule
  ]
})
export class PagesModule { }
