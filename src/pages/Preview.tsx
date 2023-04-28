import React from 'react'
import styled from 'styled-components'
import StepsPreview from '../components/StepsPreview/StepsPreview'
import { useSteps } from '../hooks'

const Preview = () => {

  const { steps } = useSteps()

  return (
    <Root><StepsPreview steps={steps} /></Root>
  )
}

const Root = styled.div`
  margin: 15px;
`

export default Preview