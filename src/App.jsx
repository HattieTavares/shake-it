import React from 'react'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Image from "./components/Image"
import Customizations from "./components/Customizations"
import Overview from './components/Overview'

function App() {

  return (
    <div className="App">
      <Header />
      <Overview />
      <Image />
      <Customizations />
      <Footer />
    </div>
  )
}

export default App
