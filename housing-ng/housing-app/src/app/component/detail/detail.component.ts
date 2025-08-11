import { Component, inject, OnInit } from '@angular/core';
import { HousingService } from '../../service/housing.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  imports: [ReactiveFormsModule]
})
export class DetailComponent implements OnInit {
  housingService = inject(HousingService);
  route = inject(ActivatedRoute);

  applyForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
  });

  ngOnInit() {
    const id:string = this.route.snapshot.params['id'];
    this.housingService.getHousingLocationById(id);
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    )
  }

  housingLocation = this.housingService.housingLocation;
}
