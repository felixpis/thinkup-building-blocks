import React from 'react'
import { IQuestion } from '../../models'
import styled from 'styled-components'
import { List } from 'antd'
import AddQuestion from './AddQuestion/AddQuestion'
import QuestionItem from './QuestionItem/QuestionItem'

interface Props {
  questions: IQuestion[]
  onAdd: (content: string) => void
  onUpdate: (item: IQuestion, newContent: string) => void
  onDelete: (item: IQuestion) => void
}

const QuestionsList = ({questions, onAdd, onUpdate, onDelete}: Props) => {
  return (
    <Root>
      <List bordered dataSource={questions} locale={{ emptyText: 'No questions exist yet. Please add some' }} renderItem={(item) => <QuestionItem item={item} onUpdate={onUpdate} onDelete={onDelete} />} />
      <AddQuestion onAdd={onAdd} />
    </Root>
  )
}

const Root = styled.div`

`

export default QuestionsList