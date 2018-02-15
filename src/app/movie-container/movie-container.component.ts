import { Component, OnInit } from '@angular/core';
import { MovieStoreService } from '../moviestore.service';


@Component({
  selector: 'movie-container',
  templateUrl: './movie-container.component.html',
  styleUrls: ['./movie-container.component.css']
})
export class MovieContainerComponent implements OnInit {
  //  movieToggleVar: boolean;

  constructor(private generalservice: MovieStoreService) {
   }

  ngOnInit() {
    // this.movieToggleVar=true;
  }
  // toggleMovies(){
  //   this.movieToggleVar=!this.movieToggleVar;
  // }
}
