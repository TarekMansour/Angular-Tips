import { Injectable } from '@angular/core';
import { MOVIES } from '../data/mock-movies'
import { Movie } from '../data/movie'
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  // getMovies(): Movie[] {
  //   return MOVIES;
  // }

  getMovies(): Observable<Movie[]>{
    this.messageService.add('MovieService: fetched movies');
    return of(MOVIES);
  }
  
  constructor(private messageService: MessageService) { }
}
