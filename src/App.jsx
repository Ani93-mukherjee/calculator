import {useState}  from 'react'
import Sidebar from './Sidebar'
import Home from './Home'
import Header  from './Header'
import "./App.css"

function App() {
  const[openSidebarToggle,setOpenSidebarToggle]=useState(false)

  const openSidebar=()=>{
      setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <div className='grid-container'>
    <Header openSidebar={openSidebar}/>
    <Sidebar openSidebarToggle={openSidebarToggle} openSidebar={openSidebar} />
    <Home/>  
    </div>
  )
}

export default App
