/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CitylistComponent } from './citylist.component';

describe('CitylistComponent', () => {
  let component: CitylistComponent;
  let fixture: ComponentFixture<CitylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
