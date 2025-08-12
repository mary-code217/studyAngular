import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Cities, City } from '../model/trip.model';

@Injectable({providedIn:"root"})
export class CityApiService {
    private readonly API_URL = "https://trip-wiki-api.vercel.app/";
    private http = inject(HttpClient);

    cities = signal<Cities|undefined>(undefined);

    citiesParams = computed(() => {
        
    })
    
    getCities() {
        this.http.get<Cities>(this.API_URL).subscribe({
            next: (res) => this.cities.set(res),
            error: (err) => console.log("Api 호출 실패", err),
        });
    }


}
