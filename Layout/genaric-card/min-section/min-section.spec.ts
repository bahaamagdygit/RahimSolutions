import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinSection } from './min-section';

describe('MinSection', () => {
  let component: MinSection;
  let fixture: ComponentFixture<MinSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
