import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMilitaryCourseComponent } from './add-military-course.component';

describe('AddMilitaryCourseComponent', () => {
  let component: AddMilitaryCourseComponent;
  let fixture: ComponentFixture<AddMilitaryCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMilitaryCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMilitaryCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
