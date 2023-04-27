import type { Meta, StoryObj } from '@storybook/react';
import { v4 as uuidv4 } from 'uuid';
import { DragDropContext } from 'react-beautiful-dnd'

import QuestionsList from './QuestionsList';
import { useState } from 'react';
import { IQuestion } from '../../models/Question';

const meta: Meta<typeof QuestionsList> = {
  title: 'QuestionsList',
  component: QuestionsList,
};

export default meta;
type Story = StoryObj<typeof meta>;

const QuestionsListExample = () => {
  const [questions, setQuestions] = useState<IQuestion[]>([])

  const handleAdd = (content: string) => {
    setQuestions([...questions, { id: uuidv4(), content }])
  }

  const handleUpdate = (item: IQuestion, newContent: string) => {
    const foundIndex = questions.findIndex(question => question.id === item.id)
    setQuestions([...questions.slice(0, foundIndex), {...item, content: newContent}, ...questions.slice(foundIndex + 1)])
  }

  const handleDelete = (item: IQuestion) => {
    setQuestions(questions.filter(question => question.id !== item.id))
  }
  return <QuestionsList questions={questions} onAdd={handleAdd} onUpdate={handleUpdate} onDelete={handleDelete} />
}

export const Primary: Story = {
  render: () => <QuestionsListExample />,
};


