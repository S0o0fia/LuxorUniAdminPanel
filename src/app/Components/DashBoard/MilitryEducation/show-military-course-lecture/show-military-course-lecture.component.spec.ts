import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMilitaryCourseLectureComponent } from './show-military-course-lecture.component';

describe('ShowMilitaryCourseLectureComponent', () => {
  let component: ShowMilitaryCourseLectureComponent;
  let fixture: ComponentFixture<ShowMilitaryCourseLectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMilitaryCourseLectureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMilitaryCourseLectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
