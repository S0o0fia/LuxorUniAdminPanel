import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineesofCourseComponent } from './traineesof-course.component';

describe('TraineesofCourseComponent', () => {
  let component: TraineesofCourseComponent;
  let fixture: ComponentFixture<TraineesofCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineesofCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineesofCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
