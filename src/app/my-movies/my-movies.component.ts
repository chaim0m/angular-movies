import { Component, OnInit, Input } from '@angular/core';
import { MovieStoreService } from '../moviestore.service';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

import Movie from '../models/movie';


@Component({
  selector: 'my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.css']
})
export class MyMoviesComponent implements OnInit {
  // @Input() movies: any[];
  constructor(private moviestoreservice: MovieStoreService, private userservice: UserService,private route: ActivatedRoute) { }
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
  removeMovie(movie: Movie){
    // this.moviestoreservice.addMovie(movie);
   this.mymovies = this.userservice.removeMovie(movie);

    // this.userservice.addToBudget(this.movie.price);
  }

}
