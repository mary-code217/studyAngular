import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { HousingLocationInfo } from '../model/housingLocation.model';

@Injectable({
  providedIn: 'root'
})
export class HousingService{
  readonly API_URL = "http://localhost:3000/locations";
  private http = inject(HttpClient);
  housingLocationList = signal<HousingLocationInfo[]>([]);
  housingLocation = signal<HousingLocationInfo|undefined>(undefined);

  query = signal<string>("");

  housingFilterList = computed(() => {
    const q = this.query().toLowerCase().trim();
    const list = this.housingLocationList();
    if(!q) {
      return list;
    }
    return list.filter(i => (i.city ?? '').toLowerCase().includes(q));
  })

  setQuery(query:string) {
    this.query.set(query);
  }

  getHousingLocationList() {
    this.http.get<HousingLocationInfo[]>(this.API_URL).subscribe({
      next: (res) => this.housingLocationList.set(res),
      error: (err) => console.log(`Api 호출 실패` + err)
    })
  }

  getHousingLocationById(id:string) {
    this.http.get<HousingLocationInfo>(`${this.API_URL}/${id}`).subscribe({
      next: (res) => this.housingLocation.set(res),
      error: (err) => console.log(`Api 호출 실패`+ err)
    })
  }

  submitApplication(firstName:string, lastName:string, email:string) {
    console.log(`name : ${firstName}${lastName}, email : ${email}`);
  }
}
