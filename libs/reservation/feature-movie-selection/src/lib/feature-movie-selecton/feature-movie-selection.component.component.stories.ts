import { Meta, StoryObj } from '@storybook/angular';
import { FeatureMovieSelection } from './feature-movie-selection.component';

const meta: Meta<FeatureMovieSelection> = {
  title: 'Reservation/Feature Movie Selection',
  component: FeatureMovieSelection,
};

export default meta;

type Story = StoryObj<FeatureMovieSelection>;

export const Default: Story = {};
