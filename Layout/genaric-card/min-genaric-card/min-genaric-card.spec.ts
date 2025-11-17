import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinGenaricCard } from './min-genaric-card';

describe('MinGenaricCard', () => {
  let component: MinGenaricCard;
  let fixture: ComponentFixture<MinGenaricCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinGenaricCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinGenaricCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
