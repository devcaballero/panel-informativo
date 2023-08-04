import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DolarblueComponent } from './dolarblue.component';

describe('DolarblueComponent', () => {
  let component: DolarblueComponent;
  let fixture: ComponentFixture<DolarblueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DolarblueComponent]
    });
    fixture = TestBed.createComponent(DolarblueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
