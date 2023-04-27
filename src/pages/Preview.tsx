import React from 'react'
import styled from 'styled-components'
import StepsPreview from '../components/StepsPreview/StepsPreview'

const Preview = () => {
  return (
    <Root><StepsPreview steps={[]} /></Root>
  )
}

const Root = styled.div`
  margin: 15px;
`

export default Preview