import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieMainPageComponent } from "./features/movie-main-page/movie-main-page/movie-main-page.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MovieMainPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'buscador-filmes-OMDB';
}
