import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Movie from '../models/movie';
import { UserService } from '../user.service';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie;
  @Input() btnText: string;
  @Output() toggleMovie: EventEmitter<Movie> = new EventEmitter<Movie>();
  
  constructor(private userservice: UserService) { }

  ngOnInit() {
  }
  clickFunc(){
    this.toggleMovie.emit(this.movie);
  }
}
  