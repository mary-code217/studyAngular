import { Injectable, inject, signal, OnDestroy, effect } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { PhotoResponse, Photo } from '../model/photo.model';


@Injectable({ providedIn: 'root' })
export class AnimalService {
  private http = inject(HttpClient);
  private route = inject(ActivatedRoute);

  private API_URL = 'https://animal-api-two.vercel.app/';

  photos = signal<Photo[]>([]);
  tabName = signal<string>('');

  constructor() {
    const url = `${this.API_URL}${this.tabName()}`;

    this.http.get<PhotoResponse>(url).subscribe({
      next: (res) => this.photos.set(res.photos),
      error: (err) => console.error('API 호출 실패', err),
    });

    console.log(this.photos);
  }

  getPhotos(tab:string) {
    const url = `${this.API_URL}${tab}`;

    this.http.get<PhotoResponse>(url).subscribe({
      next: (res) => this.photos.set(res.photos),
      error: (err) => console.error('API 호출 실패', err),
    });
  }

  setTabName(name: string) {
    this.tabName.set(name);
  }
}

