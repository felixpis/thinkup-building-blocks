import type { Meta, StoryObj } from '@storybook/react';
import { v4 as uuidv4 } from 'uuid';

import StepsList from './StepsList';
import { useState } from 'react';
import { IStep, IQuestion } from '../../models';
import questionsMock from './__mocks__/questions.json'

const meta: Meta<typeof StepsList> = {
  title: 'StepsList',
  component: StepsList,
};

export default meta;
type Story = StoryObj<typeof meta>;

const StepsListExample = () => {
  const [steps, setSteps] = useState<IStep[]>([])

  const handleAdd = () => {
    setSteps([...steps, { id: uuidv4(), questions: []}])
  }

  const handleUpdate = (step: IStep, questions: IQuestion[]) => {
    const foundIndex = steps.findIndex(s => s.id === step.id)
    setSteps([...steps.slice(0, foundIndex), {...step, questions }, ...steps.slice(foundIndex + 1)])
  }

  const handleDelete = (step: IStep) => {
    setSteps(steps.filter(s => s.id !== step.id))
  }
  return <StepsList steps={steps} questions={questionsMock} onAdd={handleAdd} onUpdate={handleUpdate} onDelete={handleDelete} />
}

export const Primary: Story = {
  render: () => <StepsListExample />,
};


