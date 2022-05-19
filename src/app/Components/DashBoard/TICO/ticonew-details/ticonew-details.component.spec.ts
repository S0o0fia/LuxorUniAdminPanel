import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TICONewDetailsComponent } from './ticonew-details.component';

describe('TICONewDetailsComponent', () => {
  let component: TICONewDetailsComponent;
  let fixture: ComponentFixture<TICONewDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TICONewDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TICONewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
