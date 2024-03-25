import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import '/i18nify'

function App() {
  return (
      <div>
        <Outlet/>
      </div>
  )
}

export default App
