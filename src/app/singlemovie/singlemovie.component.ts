import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from '../services/movie-service.service';

@Component({
  selector: 'app-singlemovie',
  templateUrl: './singlemovie.component.html',
  styleUrls: ['./singlemovie.component.scss']
})



export class SinglemovieComponent implements OnInit {
  movie;
  error: string;
  message: string;
  errors: string;
  constructor(private route: ActivatedRoute, private api: MovieServiceService) { }

  ngOnInit() {
    this.findBySlug();
  }
  findBySlug() {
    const { params } = this.route.snapshot;
    this.api.findBySlug(params.slug).subscribe((res) => {
      if (!res) {
        this.error = 'sorry movie could not be found.';
      }
      this.movie = res;
    });
  }

  AddToFavorite(id: number) {
    this.api.addFavorite(id).subscribe((response) => {
      const { message } = response;
      this.message = message;
    }, ( error) => {
      this.errors = error.error;
    });
  }

}
