import { Button, List } from 'antd'
import React from 'react'
import { IQuestion } from '../../../models/Question'
import { DeleteOutlined } from '@ant-design/icons'

interface Props {
  questions: IQuestion[]
  onDelete: (question: IQuestion) => void
}

const StepQuestions = ({ questions, onDelete }: Props) => {
  return (
    <List locale={{ emptyText: 'No questions exist in step'}} dataSource={questions} renderItem={(item) => <List.Item actions={[
      <Button key="delete" type="text" danger icon={<DeleteOutlined />} onClick={() => onDelete(item)} />
    ]}>{item.content}</List.Item>} />
  )
}

export default StepQuestions