import { Button, Collapse, Empty, Popconfirm } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons'
import { IStep, IQuestion } from '../../models'
import QuestionsSelector from '../QuestionsSelector/QuestionsSelector'
import StepQuestions from './StepQuestions/StepQuestions'
import { DragDropContext, DropResult, ResponderProvided } from 'react-beautiful-dnd'
const { Panel } = Collapse

interface Props {
  steps: IStep[]
  questions: IQuestion[]
  onAdd: () => void
  onUpdate: (step: IStep, questions: IQuestion[]) => void
  onDelete: (step: IStep) => void
}

const StepsList = ({ steps, questions, onAdd, onUpdate, onDelete }: Props) => {
  const handleSelectQuestion = (step: IStep) => (question: IQuestion) => {
    onUpdate(step, [...step.questions, question])
  }

  const handleDeleteQuestion = (step: IStep, question: IQuestion) => {
    onUpdate(step, step.questions.filter((q) => q.id !== question.id))
  }

  const handleDragEnd = (result: DropResult, provided: ResponderProvided) => {
    console.log(result, provided)
    if (!result.destination) {
      return
    }
    const { index: sourceIndex } = result.source
    const { index: destinationIndex, droppableId: stepId } = result.destination

    const selectedStep = steps.find((s) => s.id === stepId)

    if (!selectedStep) {
      return
    }

    const list = [...selectedStep.questions]

    const [item] = list.splice(sourceIndex, 1)
    list.splice(destinationIndex, 0, item)

    onUpdate(selectedStep, list)
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      {steps.length === 0 && <Empty description="No steps exist yet. Please create some"></Empty>}
      {steps.length > 0 && (
        <Collapse accordion>
          {steps.map((step, index) => (
            <Panel key={step.id} header={`Step ${index + 1}`} extra={getDeleteAction(() => onDelete(step))}>
              <Actions pos="bottom">
                <QuestionsSelector step={step} questions={questions} onSelect={handleSelectQuestion(step)} />
              </Actions>
              <StepQuestions step={step} onDelete={handleDeleteQuestion} />
            </Panel>
          ))}
        </Collapse>
      )}
      <Actions pos="top">
        <Button type="primary" size="large" onClick={onAdd} icon={<PlusOutlined />}>
          Create a new step
        </Button>
      </Actions>
    </DragDropContext>
  )
}

const getDeleteAction = (onDelete: () => void) => (
  <Popconfirm title="Delete step" description="Are you sure you want to delete this step?" onConfirm={onDelete}>
    <Button type="text" danger icon={<DeleteOutlined />} />
  </Popconfirm>
)

const Actions = styled.div<{ pos: 'top' | 'bottom' }>`
  ${(props) => `margin-${props.pos}: 20px`};
  text-align: right;
`

export default StepsList
