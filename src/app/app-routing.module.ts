import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovieContainerComponent } from './movie-container/movie-container.component';
import { AboutComponent } from './about/about.component';
import { BudgetComponent } from './budget/budget.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
const routes: Routes = [
  { path: '', component: MovieContainerComponent},
  { path: 'about', component: AboutComponent },
  { path: 'balance', component: BudgetComponent },
  { path: 'balance/:id', component: AllMoviesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }