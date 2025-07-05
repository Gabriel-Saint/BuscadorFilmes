import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { IMovie } from '../../interfaces/movie/movie.interface';
import { IMovieResponse } from '../../interfaces/movie/movieResponse.interface';
import { Observable } from 'rxjs';
import { IMovieDetails } from '../../interfaces/movie/movieDetails.interface';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {
  private apiUrl = environment.omdbApiUrl;
  private apiKey = environment.omdbApiKey;

  constructor(private http: HttpClient) { }

  seachMovies(title: IMovie['Title']): Observable<IMovieResponse> {
    const url = `${this.apiUrl}?s=${encodeURIComponent(title)}&apikey=${this.apiKey}`;
    return this.http.get<IMovieResponse>(url);
  }
  seachMovie(imdbID: IMovie['imdbID']): Observable<IMovieDetails> {
    const url = `${this.apiUrl}?i=${encodeURIComponent(imdbID)}&apikey=${this.apiKey}`;
    return this.http.get<IMovieDetails>(url);
  }
}
