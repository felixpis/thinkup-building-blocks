import 'antd/dist/reset.css'
import Header from './components/Header/Header'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Questions from './pages/Questions'
import Steps from './pages/Steps'
import Preview from './pages/Preview'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route index path='/questions' element={<Questions />} />
          <Route path='/steps' element={<Steps />} />
          <Route path='/preview' element={<Preview />} />
          <Route path='/' element={<Navigate to="/questions" />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
