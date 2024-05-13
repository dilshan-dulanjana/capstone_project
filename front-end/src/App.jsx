import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.js'
import 'aos/dist/aos.css'
import Navigate from './Dilshan/Navigate'
function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='container'>


    <Navigate></Navigate>

  </div>
  )
}

export default App
