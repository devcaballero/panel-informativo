import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InflacionanualComponent } from './inflacionanual.component';

describe('InflacionanualComponent', () => {
  let component: InflacionanualComponent;
  let fixture: ComponentFixture<InflacionanualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InflacionanualComponent]
    });
    fixture = TestBed.createComponent(InflacionanualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
