import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { headers } from '../routes/headers';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  private backendUrl = `${environment.appUrl}/movies`;
  private favoriteUrl = `${environment.appUrl}/favorites`;
  constructor(private http: HttpClient) { }

  getAllMovie(): Observable<any> {
    return this.http.get<any>(this.backendUrl);
  }
  findBySlug(slug: string): Observable<any> {
    return this.http.get<any>(`${this.backendUrl}/${slug}`);
  }

  addFavorite(movieId): Observable<any> {
    return this.http.post<any>(`${this.favoriteUrl}/${movieId}/add`, {}, headers);
  }
}
