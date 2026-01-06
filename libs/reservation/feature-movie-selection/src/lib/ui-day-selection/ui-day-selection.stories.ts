import type { Meta, StoryObj } from '@storybook/angular';
import { UiDaySelection } from './ui-day-selection';
import { expect } from 'storybook/test';
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
