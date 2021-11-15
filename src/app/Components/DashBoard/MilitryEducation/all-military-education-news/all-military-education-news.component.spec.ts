import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMilitaryEducationNewsComponent } from './all-military-education-news.component';

describe('AllMilitaryEducationNewsComponent', () => {
  let component: AllMilitaryEducationNewsComponent;
  let fixture: ComponentFixture<AllMilitaryEducationNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMilitaryEducationNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMilitaryEducationNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
