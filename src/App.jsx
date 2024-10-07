import { BrowserRouter } from 'react-router-dom'
import './App.css'
import HeaderForEveryone from './components/HeaderForEveryone'
import AppRouter from './routes/router.jsx'
function App() {
  return (
    <>
    <div className='bg-custom-gradient h-full px-[176px]'>
      <HeaderForEveryone />
      <BrowserRouter>
      <AppRouter/>
      </BrowserRouter>
    </div>
     </>
  )
}

export default App
