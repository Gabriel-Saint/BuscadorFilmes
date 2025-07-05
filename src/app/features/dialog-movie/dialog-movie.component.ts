import { Component, Inject, OnInit, signal } from '@angular/core';
import { IMovieDetails } from '../../interfaces/movie/movieDetails.interface';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-movie',
  imports: [MatDialogModule],
  templateUrl: './dialog-movie.component.html',
  styleUrl: './dialog-movie.component.scss'
})
export class DialogMovieComponent implements OnInit {
  /**
   *
   */
  constructor(@Inject(MAT_DIALOG_DATA) private _data: IMovieDetails, private _dialogRef: MatDialogRef<DialogMovieComponent>) {
  }

  ngOnInit(): void {
    this.getData.set(this._data);
  }

  public getData = signal<IMovieDetails | null>(null);

  public closeModal() {
    this._dialogRef.close();
  }


}
