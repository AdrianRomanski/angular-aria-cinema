import { Component, computed, input, signal } from '@angular/core';
import { Combobox, ComboboxInput, ComboboxPopupContainer } from '@angular/aria/combobox';
import { Listbox, Option } from '@angular/aria/listbox';
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { DayOption } from '../util-models/day.model';

@Component({
  selector: 'reservation-ui-day-selection',
  imports: [
    Combobox,
    ComboboxInput,
    ComboboxPopupContainer,
    Listbox,
    Option,
    CdkConnectedOverlay
  ],
  templateUrl: './ui-day-selection.html',
  styleUrl: './ui-day-selection.scss',
})
export class UiDaySelection {
  public readonly days = input.required<DayOption[]>();

  protected selectedDay = signal<string[]>([]);

  protected day = computed(() => {
    const values = this.selectedDay();
    const day = this.days().find((d) => d.value === values[0]);
    return day ? `${day.dayName}, ${day.label}` : 'Select a day';
  });
}
