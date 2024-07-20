import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H100Component } from './h100.component';

describe('H100Component', () => {
  let component: H100Component;
  let fixture: ComponentFixture<H100Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [H100Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(H100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
