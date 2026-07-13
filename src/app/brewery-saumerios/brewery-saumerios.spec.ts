import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewerySaumerios } from './brewery-saumerios';

describe('BrewerySaumerios', () => {
  let component: BrewerySaumerios;
  let fixture: ComponentFixture<BrewerySaumerios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrewerySaumerios],
    }).compileComponents();

    fixture = TestBed.createComponent(BrewerySaumerios);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
