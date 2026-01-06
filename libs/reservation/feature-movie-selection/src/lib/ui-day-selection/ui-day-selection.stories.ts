import type { Meta, StoryObj } from '@storybook/angular';
import { UiDaySelection } from './ui-day-selection';
import { getDateForDayOfWeek, generateWeekDays } from '../util-functions/generation.functions';

const meta: Meta<UiDaySelection> = {
  component: UiDaySelection,
  title: 'UiDaySelection',
};
export default meta;

type Story = StoryObj<UiDaySelection>;

export const FullWeek: Story = {
  args: {
    days: generateWeekDays(getDateForDayOfWeek(1)),
  },
};

const dayNameToNumber: Record<string, number> = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
};

type StoryWithControl = StoryObj<UiDaySelection & { startingDay: string }>;

export const ControlStartingDay: StoryWithControl = {
  argTypes: {
    startingDay: {
      control: { type: 'select' },
      options: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      description: 'Starting day of the week',
    },
  },
  args: {
    startingDay: 'Monday',
  },
  render: (args) => {
    const dayNumber = dayNameToNumber[args.startingDay];
    const startingDate = getDateForDayOfWeek(dayNumber);
    return {
      component: UiDaySelection,
      props: {
        days: generateWeekDays(startingDate),
      },
    };
  },
};

export const OneHoliday: Story = {
  args: {
    days: (() => {
      const startingDate = getDateForDayOfWeek(1);
      const days = generateWeekDays(startingDate);
      const wednesday = days.find((day) => day.dayName === 'Wed');
      if (wednesday) {
        const disabledDate = new Date(wednesday.value);
        return generateWeekDays(startingDate, [disabledDate]);
      }
      return days;
    })(),
  },
};

type StoryWithHolidayControl = StoryObj<
  UiDaySelection & { startingDay: string; disabledDays: string[] }
>;

export const ControlHolidays: StoryWithHolidayControl = {
  argTypes: {
    startingDay: {
      control: { type: 'select' },
      options: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      description: 'Starting day of the week',
    },
    disabledDays: {
      control: { type: 'multi-select' },
      options: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      description: 'Days to disable (holidays)',
    },
  },
  args: {
    startingDay: 'Monday',
    disabledDays: [],
  },
  render: (args) => {
    const startingDayNumber = dayNameToNumber[args.startingDay];
    const startingDate = getDateForDayOfWeek(startingDayNumber);

    const allDays = generateWeekDays(startingDate);

    const disabledDates = args.disabledDays
      .map((dayName) => {
        const disabledDayNumber = dayNameToNumber[dayName];
        return allDays.find((day) => {
          const dayDate = new Date(day.value);
          return dayDate.getDay() === disabledDayNumber;
        });
      })
      .filter((day): day is NonNullable<typeof day> => day !== undefined)
      .map((day) => new Date(day.value));

    return {
      component: UiDaySelection,
      props: {
        days: generateWeekDays(startingDate, disabledDates),
      },
    };
  },
};
