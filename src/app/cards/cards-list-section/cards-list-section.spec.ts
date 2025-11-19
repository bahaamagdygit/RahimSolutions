import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsListSection } from './cards-list-section';

describe('CardsListSection', () => {
  let component: CardsListSection;
  let fixture: ComponentFixture<CardsListSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsListSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsListSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
