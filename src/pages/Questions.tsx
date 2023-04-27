import styled from 'styled-components'
import QuestionsList from '../components/QuestionsList/QuestionsList'
import useQuestions from '../hooks/useQuestions';

const Questions = () => {
  const { questions, addQuestion, updateQuestion, deleteQuestion } = useQuestions()

  return (
    <Root>
      <QuestionsList questions={questions} onAdd={addQuestion} onUpdate={updateQuestion} onDelete={deleteQuestion} />
    </Root>
  )
}

const Root = styled.div`
  margin: 15px;
`

export default Questions