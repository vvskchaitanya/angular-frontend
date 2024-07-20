import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideAdvComponent } from './side-adv.component';

describe('SideAdvComponent', () => {
  let component: SideAdvComponent;
  let fixture: ComponentFixture<SideAdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideAdvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideAdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
