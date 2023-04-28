import { Button, Input, InputRef, List, Popconfirm } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import { IQuestion } from '../../../models'
import { DeleteOutlined, EditOutlined, RollbackOutlined, SaveOutlined } from '@ant-design/icons'

interface Props {
  item: IQuestion
  onUpdate: (item: IQuestion, newContent: string) => void
  onDelete: (item: IQuestion) => void
}

const QuestionItem = ({ item, onUpdate, onDelete }: Props) => {

  const [editMode, setEditMode] = useState(false)
  const [value, setValue] = useState('')
  const inputRef = useRef<InputRef>(null)

  const handleEdit = () => {
    setEditMode(true)
    inputRef.current?.focus()
  }

  const handleUpdate = () => {
    onUpdate(item, value)
    setEditMode(false)
  }

  useEffect(() => {
    if (editMode) {
      setValue(item.content)
      inputRef.current?.focus()
    } else {
      setValue('')
    }
  }, [editMode, item.content])

  const readModeActions = [
    <Button key="edit" type="text" onClick={handleEdit} icon={<EditOutlined />} />,
    <Popconfirm key="delete" title="Delete question" description="Are you sure you want to delete this question?" onConfirm={() => onDelete(item)}>
      <Button type="text" danger icon={<DeleteOutlined />} />
    </Popconfirm>
  ]

  const editModeActions = [
    <Button key="update" type="text" onClick={handleUpdate} icon={<SaveOutlined />} />,
    <Button key="back" type="text" onClick={() => setEditMode(false)} icon={<RollbackOutlined />} />
  ]

  const actions = editMode ? editModeActions : readModeActions

  return (
    <List.Item actions={actions}>
      {editMode ? <Input ref={inputRef} value={value} onChange={(e) => setValue(e.target.value)} /> : item.content}
    </List.Item>
  )
}

export default QuestionItem