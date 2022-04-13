import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportRegistedStudentPDFComponent } from './export-registed-student-pdf.component';

describe('ExportRegistedStudentPDFComponent', () => {
  let component: ExportRegistedStudentPDFComponent;
  let fixture: ComponentFixture<ExportRegistedStudentPDFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportRegistedStudentPDFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportRegistedStudentPDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
