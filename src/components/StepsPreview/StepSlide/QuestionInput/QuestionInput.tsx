import React from 'react'
import { Input } from 'antd'
import styled from 'styled-components'

const { TextArea } = Input

interface Props {
  content: string
  multiline?: boolean
}

const QuestionInput = ({ content, multiline }: Props) => {
  return (
    <Root>
      <Title>{content}</Title>
      {multiline ? <TextArea size="large" /> : <Input size="large" />}
    </Root>
  )
}

const Root = styled.div`
  background-color: #fbfbfb;
  padding: 10px 20px;
  border-radius: 20px;
`

const Title = styled.h1`
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`

export default QuestionInput