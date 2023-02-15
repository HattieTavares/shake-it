import { createContext, useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Image from "./components/Image"
import Customizations from "./components/Customizations"
import Overview from './components/Overview'
import bgImage from "/corkBackground.jpg"

export const CustomContext = createContext();

function App() {
  const [fontSelection, setFontSelection] = useState('');
  const [filterSelection, setFilterSelection] = useState('');
  const [userText, setUserText] = useState({
    topText: "",
    bottomText: ""
});

  return (
    <CustomContext.Provider value={{
      fontSelection,
      setFontSelection,
      filterSelection,
      setFilterSelection,
      userText,
      setUserText
    }}>
      <div className="App"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Header />
        <Overview />
        <Image />
        <Customizations />
        <Footer />
      </div>
    </CustomContext.Provider>
  )
}

export default App
