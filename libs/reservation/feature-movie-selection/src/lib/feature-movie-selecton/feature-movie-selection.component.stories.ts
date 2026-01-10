import type { Meta, StoryObj } from '@storybook/angular';
import { FeatureMovieSelection } from './feature-movie-selection.component';

const meta: Meta<FeatureMovieSelection> = {
  component: FeatureMovieSelection,
  title: 'FeatureMovieSelection',
};
export default meta;

type Story = StoryObj<FeatureMovieSelection>;

export const MovieSelection: Story = {
  args: {},
};
