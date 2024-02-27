import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const fakeData = {
        title: 'Título do Artigo',
        content: 'Conteúdo do Artigo...',
      };
      setData(fakeData);
      setLoading(false);
    }, 4000);
  }, []);


  return (
      <div className='App'>
        {loading || !data ? (
        <div className="skeleton">
            <button></button>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          <div id='skeleton-img'></div>
        </div>
      ) : (
        <Outlet/>
      )}
        
      </div>
  )
}

export default App
