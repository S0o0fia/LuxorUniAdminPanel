import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TICONewsComponent } from './ticonews.component';

describe('TICONewsComponent', () => {
  let component: TICONewsComponent;
  let fixture: ComponentFixture<TICONewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TICONewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TICONewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
