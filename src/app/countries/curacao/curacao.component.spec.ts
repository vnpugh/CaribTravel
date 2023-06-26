import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuracaoComponent } from './curacao.component';

describe('CuracaoComponent', () => {
  let component: CuracaoComponent;
  let fixture: ComponentFixture<CuracaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuracaoComponent]
    });
    fixture = TestBed.createComponent(CuracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
