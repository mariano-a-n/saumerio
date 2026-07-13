import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaumeriosList } from './saumerios-list';

describe('SaumeriosList', () => {
  let component: SaumeriosList;
  let fixture: ComponentFixture<SaumeriosList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaumeriosList],
    }).compileComponents();

    fixture = TestBed.createComponent(SaumeriosList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
