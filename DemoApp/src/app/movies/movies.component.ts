import { Component, OnInit } from '@angular/core';
import { Movie } from '../../data/movie'
import { MovieService} from '../../services/movie.service'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

 movies: Movie[];
 selectedMovie: Movie;
 
  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

  constructor(private movieSerice: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.movies = this.movieSerice.getMovies();
  }

}
