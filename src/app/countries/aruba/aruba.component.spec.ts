import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArubaComponent } from './aruba.component';

describe('ArubaComponent', () => {
  let component: ArubaComponent;
  let fixture: ComponentFixture<ArubaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArubaComponent]
    });
    fixture = TestBed.createComponent(ArubaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
