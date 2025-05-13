import { useState } from 'react'
import './App.css'
import Dictionary from './components/Dictionary'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Dictionary/>
    </>
  )
}

export default App
