import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Home from './components/Home'
import Page from './components/page/page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home/>
      {/* <Page/> */}
    </>
  )
}

export default App
