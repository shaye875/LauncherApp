import './App.css'
import Home from './pages/home'
import { BrowserRouter, Route, Routes } from 'react-router'
import LauncherDetails from './pages/launcherDetails'
import AddLaunchert from './pages/addLaunchert'
import LoginPage from './pages/loginPage'
import Admin from './pages/admin'
import Users from './pages/users'
import RegisterPage from './pages/registerPage'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/launchers' element={<Home />} />
        <Route path='/:id' element={<LauncherDetails />}/>
        <Route path='/add' element={<AddLaunchert />}/>
        <Route path='/admin' element={<Admin />}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
