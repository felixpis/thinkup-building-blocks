import { Alert, Button, List } from 'antd'
import React, { useState } from 'react'
import styled from 'styled-components'
import { IStep } from '../../models/Step'
import { PlusOutlined } from '@ant-design/icons'
import { IQuestion } from '../../models/Question'
import StepItem from './StepItem/StepItem'
import QuestionsSelector from '../QuestionsSelector/QuestionsSelector'
import StepQuestions from './StepQuestions/StepQuestions'

interface Props {
  steps: IStep[]
  questions: IQuestion[]
  onAdd: () => void
  onUpdate: (step: IStep, questions: IQuestion[]) => void
  onDelete: (step: IStep) => void
}

const StepsList = ({ steps, questions, onAdd, onUpdate, onDelete }: Props) => {

  const [selectedStepid, setSelectedStepid] = useState<string>()
  const selectedStep = steps.find(s => s.id === selectedStepid)

  const handleSelectQuestion = (question: IQuestion) => {
    !!selectedStep && onUpdate(selectedStep, [...selectedStep.questions, question])
  }

  const handleDeleteQuestion = (question: IQuestion) => {
    !!selectedStep && onUpdate(selectedStep, selectedStep.questions.filter(q => q.id !== question.id))
  }

  console.log(selectedStep?.questions)

  return (
    <Root>
      <ListSide>
        <List bordered dataSource={steps} locale={{ emptyText: 'No steps exist yet. Please create some'}} renderItem={(step) => <StepItem selected={step.id === selectedStep?.id} step={step} onSelect={(step) => setSelectedStepid(step.id)} onDelete={onDelete} />} />
        <Actions>
          <Button type="primary" size="large" onClick={onAdd} icon={<PlusOutlined />}>Create a new step</Button>
        </Actions>
      </ListSide>
      <QuestionsSide>
        {!selectedStep && <Alert type="info" message="Please select a step" />}
        {selectedStep && <>
          <StepQuestions questions={selectedStep.questions} onDelete={handleDeleteQuestion} />
          <QuestionsSelector step={selectedStep} questions={questions} onSelect={handleSelectQuestion} />
        </>}
      </QuestionsSide>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  gap: 30px;
`

const Actions = styled.div`
  margin-top: 20px;
  text-align: right;
`

const ListSide = styled.div`
  flex: 1;
`

const QuestionsSide = styled.div`
  flex: 3;
`

export default StepsList