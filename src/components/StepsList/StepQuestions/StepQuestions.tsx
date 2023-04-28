import { Button, Empty } from 'antd'
import React from 'react'
import { IQuestion, IStep } from '../../../models'
import { DeleteOutlined, HolderOutlined } from '@ant-design/icons'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'

interface Props {
  step: IStep
  onDelete: (step: IStep, question: IQuestion) => void
}

const StepQuestions = ({ step, onDelete }: Props) => {
  const { questions } = step
  return (
    <>
      {questions.length === 0 && <Empty description="No questions exist in step" />}
      {questions.length > 0 && (
        <Droppable droppableId={step.id}>
          {(provided, snapshot) => (
            <List {...provided.droppableProps} ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
              {questions.map((item, index) => (
                <Draggable key={item.id} draggableId={`${step.id}_${item.id}`} index={index}>
                  {(provided, snapshot) => (
                    <Item ref={provided.innerRef} {...provided.draggableProps} style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}>
                      <Content>
                        <div {...provided.dragHandleProps}>
                          <HolderOutlined />
                        </div>
                        {item.content}
                      </Content>
                      <div>
                        <Button type="text" danger icon={<DeleteOutlined />} onClick={() => onDelete(step, item)} />
                      </div>
                    </Item>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </List>
          )}
        </Droppable>
      )}
    </>
  )
}

const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
  background: isDragging ? 'lightgreen' : 'transparent',
  ...draggableStyle,
})

const getListStyle = (isDraggingOver: boolean) => ({
  background: isDraggingOver ? '#F6F9FC' : 'white',
})

const List = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 8px;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  border-block-end: 1px solid rgba(5, 5, 5, 0.06);
`

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export default StepQuestions
