import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryAbout } from './brewery-about';

describe('BreweryAbout', () => {
  let component: BreweryAbout;
  let fixture: ComponentFixture<BreweryAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BreweryAbout],
    }).compileComponents();

    fixture = TestBed.createComponent(BreweryAbout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
