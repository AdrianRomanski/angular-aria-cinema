import type { Preview } from '@storybook/angular';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: 'linear-gradient(180deg, #0a0a1a 0%, #12121f 100%)',
        },
      ],
    },
  },
  decorators: [
    (story) => {
      const originalStory = story();
      return {
        ...originalStory,
        template: originalStory.template
          ? `<div style="background: linear-gradient(180deg, #0a0a1a 0%, #12121f 100%); min-height: 100vh; padding: 1rem; display: block;">${originalStory.template}</div>`
          : originalStory.template,
      };
    },
  ],
};

export default preview;
