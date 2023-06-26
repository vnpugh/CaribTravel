import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StluciaComponent } from './stlucia.component';

describe('StluciaComponent', () => {
  let component: StluciaComponent;
  let fixture: ComponentFixture<StluciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StluciaComponent]
    });
    fixture = TestBed.createComponent(StluciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
