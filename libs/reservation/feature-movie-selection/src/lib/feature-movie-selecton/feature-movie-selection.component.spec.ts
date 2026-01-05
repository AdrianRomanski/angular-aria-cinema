import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureMovieSelection } from './feature-movie-selection.component';

describe('FeatureMovieSelecton', () => {
  let component: FeatureMovieSelection;
  let fixture: ComponentFixture<FeatureMovieSelection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureMovieSelection],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureMovieSelection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
