import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubBehReply } from './sub-beh-reply';

describe('SubBehReply', () => {
  let component: SubBehReply;
  let fixture: ComponentFixture<SubBehReply>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubBehReply]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubBehReply);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
