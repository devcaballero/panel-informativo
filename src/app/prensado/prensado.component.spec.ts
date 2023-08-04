import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrensadoComponent } from './prensado.component';

describe('PrensadoComponent', () => {
  let component: PrensadoComponent;
  let fixture: ComponentFixture<PrensadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrensadoComponent]
    });
    fixture = TestBed.createComponent(PrensadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
