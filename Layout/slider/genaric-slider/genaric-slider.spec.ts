import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenaricSlider } from './genaric-slider';

describe('GenaricSlider', () => {
  let component: GenaricSlider;
  let fixture: ComponentFixture<GenaricSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenaricSlider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenaricSlider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
