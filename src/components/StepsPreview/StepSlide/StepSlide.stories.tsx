import type { Meta, StoryObj } from '@storybook/react';
import stepsMock from './__mocks__/steps.json'

import StepSlide from './StepSlide';

const meta = {
  title: 'StepsPreview/StepSlide',
  component: StepSlide,
} satisfies Meta<typeof StepSlide>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SeveralQuestions: Story = {
  args: {
    step: stepsMock[0]
  },
};

export const OneQuestion: Story = {
  args: {
    step: stepsMock[1]
  },
};

