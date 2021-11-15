import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCourseTraineeComponent } from './show-course-trainee.component';

describe('ShowCourseTraineeComponent', () => {
  let component: ShowCourseTraineeComponent;
  let fixture: ComponentFixture<ShowCourseTraineeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCourseTraineeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCourseTraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
