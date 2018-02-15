import { Component, OnInit, Input } from '@angular/core';
import { MovieStoreService } from '../moviestore.service';
import { UserService } from '../user.service';
import Movie from '../movie/movie';


@Component({
  selector: 'my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.css']
})
export class MyMoviesComponent implements OnInit {
  // @Input() movies: any[];
  constructor(private moviestoreservice: MovieStoreService, private userservice: UserService) { }
  title: string;
  movie: Movie;
  // get mymovies() {
  //   return this.userservice.getMyMovies();
  // }
  mymovies:Movie[] = [];
  

  ngOnInit() {
    this.title="My Movies";
    this.mymovies=this.userservice.getMyMovies();

  }
  removeMovie(i){
    this.moviestoreservice.addMovie(this.mymovies[i]);
   this.mymovies = this.userservice.removeMovie(this.mymovies[i]);

    // this.userservice.addToBudget(this.movie.price);
  }

}
