import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarbadosComponent } from './barbados.component';

describe('BarbadosComponent', () => {
  let component: BarbadosComponent;
  let fixture: ComponentFixture<BarbadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarbadosComponent]
    });
    fixture = TestBed.createComponent(BarbadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
