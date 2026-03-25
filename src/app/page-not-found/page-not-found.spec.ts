import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFOund } from './page-not-found';

describe('PageNotFOund', () => {
  let component: PageNotFOund;
  let fixture: ComponentFixture<PageNotFOund>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageNotFOund]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNotFOund);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
