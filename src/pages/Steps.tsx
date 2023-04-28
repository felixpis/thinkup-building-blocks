import styled from 'styled-components'
import StepsList from '../components/StepsList/StepsList'
import { useSteps, useQuestions } from '../hooks';

const Steps = () => {
  const { steps, addStep, updateStep, deleteStep} = useSteps()
  const { questions } = useQuestions()

  return (
    <Root>
      <StepsList steps={steps} questions={questions} onAdd={addStep} onUpdate={updateStep} onDelete={deleteStep} />
    </Root>
  )
}

const Root = styled.div`
  margin: 15px;
`

export default Steps