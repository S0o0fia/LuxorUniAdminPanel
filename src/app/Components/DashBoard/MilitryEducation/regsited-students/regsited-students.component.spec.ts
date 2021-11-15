import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegsitedStudentsComponent } from './regsited-students.component';

describe('RegsitedStudentsComponent', () => {
  let component: RegsitedStudentsComponent;
  let fixture: ComponentFixture<RegsitedStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegsitedStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegsitedStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
