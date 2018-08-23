import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VechileInsuranceComponent } from './vechile-insurance.component';

describe('VechileInsuranceComponent', () => {
  let component: VechileInsuranceComponent;
  let fixture: ComponentFixture<VechileInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VechileInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VechileInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
