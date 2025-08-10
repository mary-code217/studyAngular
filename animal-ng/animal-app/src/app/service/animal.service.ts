import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhotoResponse, Photo } from '../model/photo.model';

@Injectable({ providedIn: 'root' })
export class AnimalService {
  private http = inject(HttpClient);
  private API_URL = 'https://animal-api-two.vercel.app/';

  photos = signal<Photo[]>([]);

  getPhotos(tab: string) {
    const url = `${this.API_URL}${tab}`;

    this.http.get<PhotoResponse>(url).subscribe({
      next: (res) => this.photos.set(res.photos),
      error: (err) => console.error('API 호출 실패', err),
    });
  }
}
