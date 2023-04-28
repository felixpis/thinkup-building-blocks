import { Menu } from 'antd'
import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
  const { pathname } = useLocation()
  return (
    <Root>
      <NavLink to="/">
        <img src="https://thinkup.global/wp-content/themes/thinkup/img/logo.svg" alt='ThinkUp' />
      </NavLink>
      <Menu
        mode="horizontal"
        selectedKeys={[pathname]}
        items={[
          { label: <NavLink to="/questions">Questions</NavLink>, key: '/questions' },
          { label: <NavLink to="/steps">Steps</NavLink>, key: '/steps' },
          { label: <NavLink to="/preview">Preview</NavLink>, key: '/preview' },
        ]}
      />
    </Root>
  )
}

const Root = styled.div`
  padding-inline: 20px;
  padding-block: 10px;
  display: flex;
  align-items: center;
  gap: 20px;
`

export default Header
