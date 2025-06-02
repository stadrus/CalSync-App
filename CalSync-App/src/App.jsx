import { Routes, Route, BrowserRouter } from 'react-router'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import EventTable from './components/event components/EventTable'

function App() {
  return (
    <>
      <HashRouter>
        <div className='flex-container'>
          <Header />
            <Routes>
                <Route className="box" path='/Home' element={<Home /> }/>
                <Route className="box" path='/About' element={ <About /> }/>
                <Route className="box" path="/Register" element={ <Register /> }/>
                <Route className="box" path='Login' element={<Login />}/>
                <Route className="box" path="/Dashboard" element={<Dashboard /> }/>
                <Route className="box" path="/EventList" element={<EventTable /> }></Route>
            </Routes>
          <Footer />
        </div>
      </HashRouter> 
    </>
  )
}

export default App