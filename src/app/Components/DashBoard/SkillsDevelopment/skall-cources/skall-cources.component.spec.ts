import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SKAllCourcesComponent } from './skall-cources.component';

describe('SKAllCourcesComponent', () => {
  let component: SKAllCourcesComponent;
  let fixture: ComponentFixture<SKAllCourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SKAllCourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SKAllCourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
