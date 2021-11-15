import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMilitaryCoursesComponent } from './show-military-courses.component';

describe('ShowMilitaryCoursesComponent', () => {
  let component: ShowMilitaryCoursesComponent;
  let fixture: ComponentFixture<ShowMilitaryCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMilitaryCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMilitaryCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
