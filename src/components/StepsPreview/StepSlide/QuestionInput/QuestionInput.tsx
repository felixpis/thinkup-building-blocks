import React from 'react'
import { Input, Typography } from 'antd'
import styled from 'styled-components'

const { TextArea } = Input

interface Props {
  content: string
  multiline?: boolean
}

const QuestionInput = ({ content, multiline }: Props) => {
  return (
    <Root>
      <Typography.Title>{content}</Typography.Title>
      {multiline ? <TextArea size="large" /> : <Input size="large" />}
    </Root>
  )
}

const Root = styled.div`
  background-color: #fbfbfb;
  padding: 10px 20px;
  border-radius: 20px;
`

export default QuestionInput