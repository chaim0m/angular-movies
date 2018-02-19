import { Component, OnInit } from '@angular/core';
import { MovieStoreService } from '../moviestore.service';
import { UserService } from '../user.service';

import Movie from '../models/movie';



@Component({
  selector: 'all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {
  constructor(private moviestoreservice: MovieStoreService, private userservice: UserService) { }

  // movies; mymovies: any[];
  title: string;
  movie: Movie;
  movies:Movie[] = [];

  // movie: Movie;
  // get movies(){
  //   return this.moviestoreservice.getAllMovies();
  // }
fetchMovies(){
  this.moviestoreservice.getAllMovies().subscribe((moviesreceived)=>this.movies=moviesreceived, error=> console.log(error));
}

  ngOnInit() {
    this.title="Movie Store";
    // console.log(this.movies);
    this.fetchMovies()
    // this.movies=this.moviestoreservice.;
    // this.mymovies=this.userservice.getMyMovies();
  }
  buyMovie(movie: Movie){
    // this.movies = this.moviestoreservice.buyMovie(movie);
    // this.movies=this.moviestoreservice.getAllMovies();
    this.userservice.addMovie(movie);
    // this.mymovies=this.userservice.getMyMovies();
    }

}
