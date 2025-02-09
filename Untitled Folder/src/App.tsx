import { Routes, Route } from 'react-router'
import Docs from './pages/Docs'
import Home from './pages/Home'
import HomeLayout from './components/Layouts/HomeLayout'
const App = () => {
  return (
    <Routes>
      <Route  element={<HomeLayout />}>
        <Route path="/hikma-docs/" element={<Home />} />
        <Route path="/hikma-docs/docs" element={<Docs />} />
      </Route>
    </Routes>
  )
}
export default App