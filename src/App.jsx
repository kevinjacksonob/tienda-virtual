import { HashRouter,Routes,Route } from 'react-router-dom'
import LoadingScreen from './components/LoadingScreen'
import NavBar from './components/NavBar'
import Home from './page/Home'
import Login from './page/Login'
import ProductId from './page/ProductId'
import Purchases from './page/Purchases'
import './App.css'
import { useSelector } from 'react-redux'

function App() {
  
  const isLoading = useSelector(state => state.isLoading)

  return (
    <div className="App">
      <HashRouter>
        <NavBar/>  
        {isLoading && <LoadingScreen/>}     
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product/:id' element={<ProductId/>}/>
          <Route path='/purchases' element={<Purchases/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </HashRouter>

    </div>
  )
}

export default App
