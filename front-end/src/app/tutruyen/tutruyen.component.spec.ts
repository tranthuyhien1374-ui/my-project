import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutruyenComponent } from './tutruyen.component';

describe('TutruyenComponent', () => {
  let component: TutruyenComponent;
  let fixture: ComponentFixture<TutruyenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutruyenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutruyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
