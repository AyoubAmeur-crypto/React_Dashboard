import './App.css'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Layout from './Components/Layout'
import Dashboard from './Components/Dashboard'
import Sidebar from './Components/Sidebar'
import Calendar from './Components/Calendar'
import Table from './Components/Table'
import KanbanBoard from './KanbanBoard'





function App() {

  return (
    
    <BrowserRouter>

      <Layout/>
      <Sidebar/>
      <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/Calendar' element={<Calendar/>}/>
          <Route path='/Task' element={<KanbanBoard />}/>
          <Route path='/Table' element={<Table/>}/>
      </Routes>
    
    </BrowserRouter>
   
    
    
  )
}

export default App
