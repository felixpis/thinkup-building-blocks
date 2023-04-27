import type { Meta, StoryObj } from '@storybook/react';
import stepsMock from './StepSlide/__mocks__/steps.json'

import StepsPreview from './StepsPreview';

const meta = {
  title: 'StepsPreview',
  component: StepsPreview,
} satisfies Meta<typeof StepsPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    steps: stepsMock
  },
};


