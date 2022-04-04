import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadMilitaryLecturesComponent } from './upload-military-lectures.component';

describe('UploadMilitaryLecturesComponent', () => {
  let component: UploadMilitaryLecturesComponent;
  let fixture: ComponentFixture<UploadMilitaryLecturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadMilitaryLecturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadMilitaryLecturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
