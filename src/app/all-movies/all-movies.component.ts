import { Component, OnInit } from '@angular/core';
import { MovieStoreService } from '../moviestore.service';
import { UserService } from '../user.service';

import Movie from '../movie/movie';



@Component({
  selector: 'all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {
  constructor(private moviestoreservice: MovieStoreService, private userservice: UserService) { }

  // movies; mymovies: any[];
  title: string;
  // movie: Movie;
  get movies(){
    return this.moviestoreservice.getAllMovies();
  }


  ngOnInit() {
    this.title="Movie Store";
    console.log(this.movies);
    // this.movies=this.moviestoreservice.getAllMovies();
    // this.mymovies=this.userservice.getMyMovies();
  }
  buyMovie(i: number){
    this.moviestoreservice.buyMovie(this.movies[i]);
    // this.movies=this.moviestoreservice.getAllMovies();
    this.userservice.addMovie(this.movies[i]);
    // this.mymovies=this.userservice.getMyMovies();
    }

}
