import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassExampleComponent } from './ng-class-example.component';

describe('NgClassExampleComponent', () => {
  let component: NgClassExampleComponent;
  let fixture: ComponentFixture<NgClassExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgClassExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgClassExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
