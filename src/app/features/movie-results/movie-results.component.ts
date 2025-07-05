import { Component, inject, Input } from '@angular/core';
import { IMovie } from '../../interfaces/movie/movie.interface';
import { MatDialog } from '@angular/material/dialog';
import { DialogMovieComponent } from '../dialog-movie/dialog-movie.component';
import { EDialogPanelClass } from '../../../enum/EDialogPanelClass.enum';
import { IMovieDetails } from '../../interfaces/movie/movieDetails.interface';
import { OmdbService } from '../../core/service/omdb.service';

@Component({
  selector: 'app-movie-results',
  imports: [],
  templateUrl: './movie-results.component.html',
  styleUrl: './movie-results.component.scss'
})
export class MovieResultsComponent {
  @Input() movies: IMovie[] = [];
  #dialog = inject(MatDialog);
  #omdbService = inject(OmdbService);

  public openDialog(imdbID: IMovie['imdbID']) {
    this.#omdbService.seachMovie(imdbID).subscribe(
      {
        next: (movieDetails) => {
          this.#dialog.open(DialogMovieComponent, {
            data:movieDetails,
            panelClass: EDialogPanelClass.PROJECTS
          })
        },
        error: (err) =>{
          console.error("erro ao buscar detalhes do filme", err);
        }
      }
    )
  }
}
