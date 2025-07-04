import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-search',
  imports: [FormsModule],
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.scss'
})
export class MovieSearchComponent {

  searchTerm: string = '';

  @Output() search: EventEmitter<string> = new EventEmitter<string>();


  onSearch(event: Event) {
    this.search.emit(this.searchTerm);
    event.preventDefault(); 
  }

}
