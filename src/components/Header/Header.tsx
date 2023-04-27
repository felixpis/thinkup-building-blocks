import { Menu } from 'antd'
import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Header = () => {
  const { pathname } = useLocation()
  return (
    <Menu
      mode="horizontal"
      selectedKeys={[pathname]}
      theme="dark"
      items={[
        { label: <NavLink to="/questions">Questions</NavLink>, key: '/questions' },
        { label: <NavLink to="/steps">Steps</NavLink>, key: '/steps' },
        { label: <NavLink to="/preview">Preview</NavLink>, key: '/preview' },
      ]}
    />
  )
}

export default Header
