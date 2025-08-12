/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CitycardComponent } from './citycard.component';

describe('CitycardComponent', () => {
  let component: CitycardComponent;
  let fixture: ComponentFixture<CitycardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitycardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
