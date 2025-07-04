import { Component, Input } from '@angular/core';
import { IMovie } from '../../../interfaces/movie/movie.interface';

@Component({
  selector: 'app-movie-results',
  imports: [],
  templateUrl: './movie-results.component.html',
  styleUrl: './movie-results.component.scss'
})
export class MovieResultsComponent {
@Input()movies: IMovie[] = [];
}
