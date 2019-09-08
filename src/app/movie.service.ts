import { Injectable } from '@angular/core';
import { Movies } from './movie.datasource';
import { Movie } from './movie';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private loggingService: LoggingService) { }

  getMovies() : Observable<Movie[]> {
    this.loggingService.add('MovieService: listing movies');
    return of(Movies);
  }

  getMovie(id): Observable<Movie> {
    this.loggingService.add('MovieService: get movie detail by id='+id)
    return of(Movies.find(movie=> movie.id == id));
  }

  
}
