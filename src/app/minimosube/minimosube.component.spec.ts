import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimosubeComponent } from './minimosube.component';

describe('MinimosubeComponent', () => {
  let component: MinimosubeComponent;
  let fixture: ComponentFixture<MinimosubeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinimosubeComponent]
    });
    fixture = TestBed.createComponent(MinimosubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
