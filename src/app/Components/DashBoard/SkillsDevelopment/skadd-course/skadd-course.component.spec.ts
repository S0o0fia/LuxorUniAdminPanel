import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SKAddCourseComponent } from './skadd-course.component';

describe('SKAddCourseComponent', () => {
  let component: SKAddCourseComponent;
  let fixture: ComponentFixture<SKAddCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SKAddCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SKAddCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
