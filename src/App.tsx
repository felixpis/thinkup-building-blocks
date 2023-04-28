import 'antd/dist/reset.css'
import './antd-overrides.css'
import Header from './components/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Questions, Steps, Preview } from './pages'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/steps" element={<Steps />} />
          <Route path="/preview" element={<Preview />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
