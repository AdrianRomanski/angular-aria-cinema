import { Component, signal } from '@angular/core';
import { UiDaySelection } from '../ui-day-selection/ui-day-selection';
import { DayOption } from '../util-models/day.model';
import { generateWeekDays } from '../util-functions/generation.functions';

@Component({
  selector: 'reservation-feature-movie-selection',
  imports: [UiDaySelection],
  templateUrl: './feature-movie-selection.component.html',
  styleUrl: './feature-movie-selection.component.scss',
})
export class FeatureMovieSelection {
  protected days = signal<DayOption[]>(generateWeekDays());
}
