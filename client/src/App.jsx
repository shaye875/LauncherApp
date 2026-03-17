import './App.css'
import Home from './pages/home'
import { BrowserRouter, Route, Routes } from 'react-router'
import LauncherDetails from './pages/launcherDetails'
import AddLaunchert from './pages/addLaunchert'
import LoginPage from './pages/loginPage'
import Admin from './pages/admin'
import Users from './pages/users'
import RegisterPage from './pages/registerPage'
import { ProtcektedRouteIntellegans, ProtekdtedRouteAdmin, ProtektedRouteBasick } from './companentas/protektedRoute'
import UserDetails from './pages/userDetails'
import UpdateUser from './pages/updateUser'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/launchers' element={
          <ProtektedRouteBasick>
            <Home />
          </ProtektedRouteBasick>
        } />
        <Route path='/:id' element={
          <ProtcektedRouteIntellegans>
            <LauncherDetails />
          </ProtcektedRouteIntellegans>
        } />
        <Route path='/add' element={
          <ProtcektedRouteIntellegans>
            <AddLaunchert />
          </ProtcektedRouteIntellegans>
        } />
        <Route path='/admin' element={
          <ProtekdtedRouteAdmin>
            <Admin />
          </ProtekdtedRouteAdmin>
        } />
        <Route path='/users' element={
          <ProtekdtedRouteAdmin>
            <Users />
          </ProtekdtedRouteAdmin>
        } />
        <Route path='/register' element={
          <ProtekdtedRouteAdmin>
            <RegisterPage />
          </ProtekdtedRouteAdmin>
        } />
        <Route path='/user/:id' element={
          <ProtekdtedRouteAdmin>
            <UserDetails />
          </ProtekdtedRouteAdmin>
        }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
