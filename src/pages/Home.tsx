import { Typography } from 'antd'
import React from 'react'
import styled from 'styled-components'

const Home = () => {
  return (
    <Root>
      <Typography.Title>
        Welcome to ThinkUp building blocks app
      </Typography.Title>
      <Typography.Title level={4}>
        With this application you can create questions and arrange them by steps
      </Typography.Title>
    </Root>
  )
}

const Root = styled.div`
  margin: 15px;
`

export default Home