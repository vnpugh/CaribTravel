import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JamaicaComponent } from './jamaica.component';

describe('JamaicaComponent', () => {
  let component: JamaicaComponent;
  let fixture: ComponentFixture<JamaicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JamaicaComponent]
    });
    fixture = TestBed.createComponent(JamaicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
