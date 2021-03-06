import { Component, OnInit } from '@angular/core';
import { Movie } from '../../data/movie';
import { MovieService} from '../../services/movie.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

 movies: Movie[];
 selectedMovie: Movie; 
 
 constructor(private movieService: MovieService, private messageService: MessageService) { }
 
 ngOnInit(): void {
   this.getMovies();
  }
  
  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
    this.messageService.add(`Movie `)
  }
  getMovies(): void {
    //subscription to the service
    this.movieService.getMovies()
      .subscribe(data => this.movies = data);
  }
}
