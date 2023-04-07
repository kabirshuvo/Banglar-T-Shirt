import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import './App.css'
import { Toaster } from 'react-hot-toast';

function App() {
  
  return (
    <div className="App">
      <Header></Header>
            
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster />
    </div>
  )
}

export default App
