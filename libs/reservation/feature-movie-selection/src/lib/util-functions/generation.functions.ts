import { DayOption } from '../util-models/day.model';

export function getDateForDayOfWeek(dayOfWeek: number, fromDate?: Date): Date {
  const date = fromDate ? new Date(fromDate) : new Date();
  const currentDay = date.getDay();
  const diff = dayOfWeek - currentDay;

  const daysToAdd = diff < 0 ? diff + 7 : diff;
  date.setDate(date.getDate() + daysToAdd);

  return date;
}

export function generateWeekDays(
  currentDay?: Date,
  disabledDates?: Date[] | string[],
): DayOption[] {
  const days: DayOption[] = [];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = currentDay ?? new Date();

  const todayDayIndex = today.getDay();
  const daysUntilSunday = todayDayIndex === 0 ? 0 : 7 - todayDayIndex;

  const normalizedDisabledDates: Date[] = disabledDates
    ? disabledDates.map((d) => (typeof d === 'string' ? new Date(d) : d))
    : [];

  for (let i = 0; i <= daysUntilSunday; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    const dayName = dayNames[date.getDay()];
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'short' });
    const dateString = date.toISOString().split('T')[0];

    const isDisabled = normalizedDisabledDates.some((disabledDate) => {
      const disabledDateString = disabledDate.toISOString().split('T')[0];
      return disabledDateString === dateString;
    });

    days.push({
      value: dateString,
      label: `${day} ${month}`,
      dayName: dayName,
      disabled: isDisabled,
    });
  }

  return days;
}
