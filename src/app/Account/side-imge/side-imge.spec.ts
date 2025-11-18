import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideImge } from './side-imge';

describe('SideImge', () => {
  let component: SideImge;
  let fixture: ComponentFixture<SideImge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideImge]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideImge);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
