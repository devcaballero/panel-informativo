import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercaComponent } from './merca.component';

describe('MercaComponent', () => {
  let component: MercaComponent;
  let fixture: ComponentFixture<MercaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MercaComponent]
    });
    fixture = TestBed.createComponent(MercaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
