import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigmacComponent } from './bigmac.component';

describe('BigmacComponent', () => {
  let component: BigmacComponent;
  let fixture: ComponentFixture<BigmacComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BigmacComponent]
    });
    fixture = TestBed.createComponent(BigmacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
