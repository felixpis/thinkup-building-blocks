import React, { useState } from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';
import QuestionsList from '../components/QuestionsList/QuestionsList'
import { IQuestion } from '../models/Question'

const Questions = () => {
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
  return (
    <Root>
      <QuestionsList questions={questions} onAdd={handleAdd} onUpdate={handleUpdate} onDelete={handleDelete} />
    </Root>
  )
}

const Root = styled.div`
  margin: 15px;
`

export default Questions