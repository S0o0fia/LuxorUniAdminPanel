import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TICOAddNewComponent } from './ticoadd-new.component';

describe('TICOAddNewComponent', () => {
  let component: TICOAddNewComponent;
  let fixture: ComponentFixture<TICOAddNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TICOAddNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TICOAddNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
