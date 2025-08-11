import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingLocationInfo } from '../housinglocation';
import { HousingService } from '../housing.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  imports: [ReactiveFormsModule],
})
export class DetailComponent implements OnInit{
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocation?: HousingLocationInfo;
  housingService = inject(HousingService);
  private cdr = inject(ChangeDetectorRef);

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  async ngOnInit(): Promise<void> {
    const housingLocationId = Number(this.route.snapshot.paramMap.get('id'));
    this.housingLocation = await this.housingService.getHousingLocationById(housingLocationId);

    this.cdr.markForCheck();
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
