import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMilitaryCourseStudentsComponent } from './show-military-course-students.component';

describe('ShowMilitaryCourseStudentsComponent', () => {
  let component: ShowMilitaryCourseStudentsComponent;
  let fixture: ComponentFixture<ShowMilitaryCourseStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMilitaryCourseStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMilitaryCourseStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
