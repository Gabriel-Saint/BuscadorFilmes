import { Component } from '@angular/core';
import { MovieSearchComponent } from "../../movie-search/movie-search/movie-search.component";
import { MovieResultsComponent } from "../../movie-results/movie-results/movie-results.component";
import { IMovie } from '../../../interfaces/movie/movie.interface';
import { OmdbService } from '../../../core/service/omdb.service';


@Component({
  selector: 'app-movie-main-page',
  imports: [MovieSearchComponent, MovieResultsComponent],
  templateUrl: './movie-main-page.component.html',
  styleUrl: './movie-main-page.component.scss'
})
export class MovieMainPageComponent {

  movies: IMovie[] = [];

  constructor(private omdbService: OmdbService) { }

  search(title: IMovie['Title']) {
    this.omdbService.seachMovies(title).subscribe({
      next: (response) => {
        this.movies = response.Search || [];
        console.log('Filmes buscados:', response.Search);
      },
      error: (err) => {
        console.error('Erro ao buscar filmes:', err);
      },
    });
  }
}
