import React from 'react'
import { IStep } from '../../../models/Step'
import QuestionInput from './QuestionInput'
import styled from 'styled-components'
import { Button } from 'antd'

interface Props {
  step: IStep
  onNext: () => void
}

const StepSlide = ({ step, onNext }: Props) => {
  return (
    <Root>
      {step.questions.map(({ content, id }) => <QuestionInput key={id} content={content} multiline={step.questions.length === 1} />)}
      <Actions><Button type="primary" size="large" onClick={onNext}>Next</Button></Actions>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Actions = styled.div`
  text-align: right;
`

export default StepSlide