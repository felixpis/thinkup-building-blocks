import React from 'react'
import { IQuestion } from '../../models/Question'
import { IStep } from '../../models/Step'
import { Button, Dropdown, MenuProps } from 'antd'

interface Props {
  step: IStep
  questions: IQuestion[]
  onSelect: (question: IQuestion) => void
}

const QuestionsSelector = ({ step, questions, onSelect }: Props) => {

  const items: MenuProps['items'] = questions.map(question => ({ key: question.id, label: question.content, disabled: isQuestionInStep(question.id, step.questions) }))
  const onClick = ({ key }: { key: string }) => {
    const question = questions.find(q => q.id === key)
    !!question && onSelect(question)
  }

  return (
    <Dropdown menu={{ items, onClick }}>
      <Button>Select a question to add to Step {step.order}</Button>
    </Dropdown>
  )
}

const isQuestionInStep = (questionId: string, stepQuestions: IQuestion[]) => {
  const foundQuestion = stepQuestions.find(q => q.id === questionId)

  return !!foundQuestion
}

export default QuestionsSelector