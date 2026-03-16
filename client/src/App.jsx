import './App.css'
import Home from './pages/home'
import { BrowserRouter, Route, Routes } from 'react-router'
import LauncherDetails from './pages/launcherDetails'
import AddLaunchert from './pages/addLaunchert'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<LauncherDetails />}/>
        <Route path='/add' element={<AddLaunchert />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
