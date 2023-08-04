import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForrosprimeComponent } from './forrosprime.component';

describe('ForrosprimeComponent', () => {
  let component: ForrosprimeComponent;
  let fixture: ComponentFixture<ForrosprimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForrosprimeComponent]
    });
    fixture = TestBed.createComponent(ForrosprimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
