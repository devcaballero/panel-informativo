import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhillipboxComponent } from './phillipbox.component';

describe('PhillipboxComponent', () => {
  let component: PhillipboxComponent;
  let fixture: ComponentFixture<PhillipboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhillipboxComponent]
    });
    fixture = TestBed.createComponent(PhillipboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
