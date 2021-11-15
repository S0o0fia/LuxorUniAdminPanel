import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTraineeComponent } from './all-trainee.component';

describe('AllTraineeComponent', () => {
  let component: AllTraineeComponent;
  let fixture: ComponentFixture<AllTraineeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTraineeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
