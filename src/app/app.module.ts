import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatCardModule,MatButtonToggleModule,MatIconModule,MatTabsModule} from '@angular/material';
import { UserService } from './user.service';
import { MovieStoreService } from './moviestore.service';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { MyMoviesComponent } from './my-movies/my-movies.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { MovieContainerComponent } from './movie-container/movie-container.component';
import { SearchComponent } from './search/search.component';
import { BudgetComponent } from './budget/budget.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MyMoviesComponent,
    AllMoviesComponent,
    BudgetComponent,
    MovieContainerComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    MatButtonToggleModule,
    MatIconModule,
    MatTabsModule
  ],
  providers: [UserService, MovieStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
