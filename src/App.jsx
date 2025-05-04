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
      <HeaderHeading heading="--- FAST REACT FOOD CO. ---" />
      <MenuHead heading="--- OUR MENU ---" />
      <Paragraph paraContent="Fast, fresh, and flavorful — powered by React. Order smart. Eat fast."

/>
      <AllFoodItems />
      <Footer/>
    </>
  )
}

export default App
