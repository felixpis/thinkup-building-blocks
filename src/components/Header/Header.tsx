import { Menu, Tour } from 'antd'
import { NavLink, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import useTour from './useTour'

const Header = () => {
  const { pathname } = useLocation()
  const { questionsRef, stepsRef, previewRef, tourOpen, handleCloseTour, tourSteps } = useTour()

  return (
    <Root>
      <NavLink to="/">
        <img src="https://thinkup.global/wp-content/themes/thinkup/img/logo.svg" alt='ThinkUp' />
      </NavLink>
      <Menu
        mode="horizontal"
        selectedKeys={[pathname]}
        items={[
          { label: <NavLink ref={questionsRef} to="/questions">Questions</NavLink>, key: '/questions' },
          { label: <NavLink ref={stepsRef} to="/steps">Steps</NavLink>, key: '/steps' },
          { label: <NavLink ref={previewRef} to="/preview">Preview</NavLink>, key: '/preview' },
        ]}
      />

      <Tour open={tourOpen} steps={tourSteps} onClose={handleCloseTour} />
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
