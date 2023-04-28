import React from 'react'
import { IStep } from '../../../models'
import QuestionInput from './QuestionInput'
import styled from 'styled-components'
import { Button, Empty } from 'antd'

interface Props {
  step: IStep
  last?: boolean
  onNext?: () => void
}

const StepSlide = ({ step, last, onNext }: Props) => {
  return (
    <Root>
      <Questions>
        {step.questions.length === 0 && <Empty description="No questions available in this step" />}
        {step.questions.map(({ content, id }) => <QuestionInput key={id} content={content} multiline={step.questions.length === 1} />)}
      </Questions>
      {!!onNext && <Actions><Button type="primary" size="large" onClick={onNext}>{ last ? 'Finish' : 'Next'}</Button></Actions>}
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 120px);
`

const Questions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
  overflow: auto;
`

const Actions = styled.div`
  margin-top: 10px;
  text-align: right;
`

export default StepSlide