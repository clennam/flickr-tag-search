import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/auth/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchPageComponent, canActivate: [AuthGuard] },
  { path: 'results', component: SearchResultsComponent, canActivate: [AuthGuard] },
  { path: 'results/:searchTerm', component: SearchResultsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
