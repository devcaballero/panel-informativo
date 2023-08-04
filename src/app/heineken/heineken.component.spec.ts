import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeinekenComponent } from './heineken.component';

describe('HeinekenComponent', () => {
  let component: HeinekenComponent;
  let fixture: ComponentFixture<HeinekenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeinekenComponent]
    });
    fixture = TestBed.createComponent(HeinekenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
