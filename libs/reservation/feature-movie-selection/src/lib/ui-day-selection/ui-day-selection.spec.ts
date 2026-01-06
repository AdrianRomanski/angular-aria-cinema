import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiDaySelection } from './ui-day-selection';

describe('UiDaySelection', () => {
  let component: UiDaySelection;
  let fixture: ComponentFixture<UiDaySelection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiDaySelection],
    }).compileComponents();

    fixture = TestBed.createComponent(UiDaySelection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
