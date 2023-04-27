import { Menu } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <Menu
      mode="horizontal"
      theme="dark"
      items={[
        { label: <NavLink to="/questions">Questions</NavLink>, key: 'questions' },
        { label: <NavLink to="/steps">Steps</NavLink>, key: 'steps' },
        { label: <NavLink to="/preview">Preview</NavLink>, key: 'preview' },
      ]}
    />
  )
}

export default Header
