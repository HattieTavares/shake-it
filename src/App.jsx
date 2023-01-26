import React from 'react'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Image from "./components/Image"
import Customizations from "./components/Customizations"
import Overview from './components/Overview'
import bgImage from "/corkBackground.jpg"

function App() {

  return (
    <div className="App"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Header />
      <Overview />
      <Image />
      <Customizations />
      <Footer />
    </div>
  )
}

export default App
