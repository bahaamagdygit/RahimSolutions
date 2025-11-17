import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaveBar } from './nave-bar';

describe('NaveBar', () => {
  let component: NaveBar;
  let fixture: ComponentFixture<NaveBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NaveBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaveBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
