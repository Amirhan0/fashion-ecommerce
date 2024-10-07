import './App.css'
import ClothingForEveryone from './components/ClothingForEveryone '
import ForThisSeason from './components/ForThisSeason'
import HeaderForEveryone from './components/HeaderForEveryone'

function App() {
  return (
    <>
    <div className='bg-custom-gradient h-full px-[176px]'>
      <HeaderForEveryone></HeaderForEveryone>
      <ClothingForEveryone></ClothingForEveryone>
      <ForThisSeason/>
    </div>
     </>
  )
}

export default App
