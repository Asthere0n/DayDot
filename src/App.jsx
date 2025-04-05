import { useState } from 'react'
import './App.css'
import './mediaQueries.css'
import Accordion from './components/Accordion'
import Daydot from './components/Daydot'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
    const [currentProduct, setCurrentProduct] = useState(null)

    return(
    <div id='layout'>
    <Header/>
    <Daydot currentProduct={currentProduct}/>
    <Accordion onProductSelect={setCurrentProduct}/>
    <Footer/>
    </div>
    )
}

export default App
