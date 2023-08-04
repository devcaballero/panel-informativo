import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OroComponent } from './oro.component';

describe('OroComponent', () => {
  let component: OroComponent;
  let fixture: ComponentFixture<OroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OroComponent]
    });
    fixture = TestBed.createComponent(OroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
