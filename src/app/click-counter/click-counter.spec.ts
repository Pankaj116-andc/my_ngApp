import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickCounter } from './click-counter';

describe('ClickCounter', () => {
  let component: ClickCounter;
  let fixture: ComponentFixture<ClickCounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClickCounter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClickCounter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
