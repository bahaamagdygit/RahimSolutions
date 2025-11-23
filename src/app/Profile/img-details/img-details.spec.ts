import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgDetails } from './img-details';

describe('ImgDetails', () => {
  let component: ImgDetails;
  let fixture: ComponentFixture<ImgDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
