import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import './App.css'

function App() {
  
  return (
    <div className="App">
      <Header></Header>
            
      <Outlet></Outlet>
    </div>
  )
}

export default App
