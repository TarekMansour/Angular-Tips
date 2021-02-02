import { Injectable } from '@angular/core';
import { MOVIES } from '../data/mock-movies'
import { Movie } from '../data/movie'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  getMovies(): Movie[] {
    return MOVIES;
  }
  
  constructor() { }
}
