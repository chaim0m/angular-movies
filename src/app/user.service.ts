import { Injectable } from '@angular/core';
import Movie from './models/movie';
import { HttpClient } from '@angular/common/http';


let MYMOVIES: Movie[] = [];// {id:4,img:"http://www.cgmeetup.net/forums/uploads/gallery/album_1392/med_gallery_646_1392_48130.jpg",title: "Beauty and the Beast", year: 2016,price:3, synopsis:"Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so I would think, given how breath-takingly pretty she is. I mean wow. Rumor has it she'll whip out a wand and turn Gaston into a toad."}
//];
// let budget = 50;

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }
  getMyMovies(): Movie[] {
    return MYMOVIES;
  }
  // getBudget(): number{
  //   return budget;
  // }
  addMovie(movie: Movie){
    MYMOVIES.push(movie);
    // console.log(MYMOVIES);
  }
  removeMovie(movie: Movie){
    MYMOVIES = MYMOVIES.filter((movieelement) => {return movieelement._id !== movie._id});
    return MYMOVIES;
    }

}
