import type { Meta, StoryObj } from '@storybook/react';

import QuestionInput from './QuestionInput';

const meta = {
  title: 'StepsPreview/StepSlide/QuestionInput',
  component: QuestionInput,
} satisfies Meta<typeof QuestionInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    content: 'What is your favorite movie?',
    multiline: false
  },
};

