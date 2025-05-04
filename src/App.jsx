import { useState } from 'react'
import HeaderHeading from './HeaderHeading'
import './App.css'
import MenuHead from './MenuHead'
import Paragraph from './Paragraph'
import AllFoodItems from './AllFoodItems'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <div className="App">
    // </div > 
    <>
      <HeaderHeading heading="--- FAST REACT PIZZA CO. ---" />
      <MenuHead heading="--- OUR MENU ---" />
      <Paragraph paraContent="Authentic Italian pizza made with love, tradition, and the freshest ingredients. Taste Italy in every slice!"/>
      <AllFoodItems />
      <Footer/>
    </>
  )
}

export default App
