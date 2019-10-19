import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../services/movie-service.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(private api: MovieServiceService) { }
   movies: any;
  ngOnInit() {
    this.getAllMovie();
  }
  getAllMovie(): void {
    this.api.getAllMovie().subscribe((response) => {
      const { data } = response;
      this.movies = data;
    }, (error) => console.log(error));
  }

}
