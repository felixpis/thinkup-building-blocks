import { Button, List, Popconfirm } from 'antd'
import React from 'react'
import { IStep } from '../../../models/Step'
import { DeleteOutlined } from '@ant-design/icons'

interface Props {
  step: IStep
  selected: boolean
  onSelect: (step: IStep) => void
  onDelete: (step: IStep) => void
}

const StepItem = ({ step, selected, onSelect, onDelete }: Props) => {
  return (
    <List.Item
      style={{ backgroundColor: selected ? 'lightcyan': undefined }}
      actions={[
        <Popconfirm key="delete" title="Delete step" description="Are you sure you want to delete this step?" onConfirm={() => onDelete(step)}>
          <Button type="text" danger icon={<DeleteOutlined />} />
        </Popconfirm>,
      ]}
    >
      <Button type="text" onClick={() => onSelect(step)}>Step {step.order}</Button>
    </List.Item>
  )
}

export default StepItem
