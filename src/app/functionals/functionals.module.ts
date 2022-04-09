import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { ViewModalComponent } from './view-modal/view-modal.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SearchBarComponent,
    ViewModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    SearchBarComponent,
    ViewModalComponent
  ]
})
export class FunctionalsModule { }
