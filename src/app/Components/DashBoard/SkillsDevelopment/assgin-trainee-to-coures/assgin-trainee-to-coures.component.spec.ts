import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssginTraineeToCouresComponent } from './assgin-trainee-to-coures.component';

describe('AssginTraineeToCouresComponent', () => {
  let component: AssginTraineeToCouresComponent;
  let fixture: ComponentFixture<AssginTraineeToCouresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssginTraineeToCouresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssginTraineeToCouresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
