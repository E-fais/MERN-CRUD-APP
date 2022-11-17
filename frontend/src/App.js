import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './Components/Header'
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'
import Register from './Pages/Register'
function App() {
  return (
    <>
    <BrowserRouter>
    <div className='container'>
      <Header/>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App