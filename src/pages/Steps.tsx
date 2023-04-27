import React, { useState } from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';
import StepsList from '../components/StepsList/StepsList'
import { IStep } from '../models/Step'
import { IQuestion } from '../models/Question';

const Steps = () => {
  const [steps, setSteps] = useState<IStep[]>([])

  const handleAdd = () => {
    const newOrder = !!steps[steps.length - 1] ? steps[steps.length - 1].order + 1 : 1
    setSteps([...steps, { id: uuidv4(), order: newOrder, questions: []}])
  }

  const handleUpdate = (step: IStep, questions: IQuestion[]) => {
    const foundIndex = steps.findIndex(s => s.id === step.id)
    setSteps([...steps.slice(0, foundIndex), {...step, questions }, ...steps.slice(foundIndex + 1)])
  }

  const handleDelete = (step: IStep) => {
    setSteps(steps.filter(s => s.id !== step.id))
  }
  return (
    <Root>
      <StepsList steps={steps} questions={[]} onAdd={handleAdd} onUpdate={handleUpdate} onDelete={handleDelete} />
    </Root>
  )
}

const Root = styled.div`
  margin: 15px;
`

export default Steps