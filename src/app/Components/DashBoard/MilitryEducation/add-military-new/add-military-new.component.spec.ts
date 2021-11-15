import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMilitaryNewComponent } from './add-military-new.component';

describe('AddMilitaryNewComponent', () => {
  let component: AddMilitaryNewComponent;
  let fixture: ComponentFixture<AddMilitaryNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMilitaryNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMilitaryNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
