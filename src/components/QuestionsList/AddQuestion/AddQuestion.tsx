import { PlusOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import React, { useState } from 'react'
import styled from 'styled-components'

interface Props {
  onAdd: (value: string) => void
}

const AddQuestion = ({ onAdd }: Props) => {
  const [value, setValue] = useState('')
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAdd(value)
    setValue('')
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Input placeholder='Write your question here' size="large" value={value} onChange={e => setValue(e.target.value)} />
      <Button disabled={!value} type="primary" size="large" icon={<PlusOutlined />} htmlType="submit">Add question</Button>
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 40px;
`

export default AddQuestion