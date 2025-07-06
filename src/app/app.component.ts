import { Component } from '@angular/core';
import { MovieMainPageComponent } from "./features/movie-main-page/movie-main-page/movie-main-page.component";

@Component({
  selector: 'app-root',
  imports: [MovieMainPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'buscador-filmes-OMDB';
}
