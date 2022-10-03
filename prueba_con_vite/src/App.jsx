import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './componentes/NavBar'
import ItemListContainer from './componentes/ItemListContainer'


function App() {
  
  return (
    <div className="App">    
    <NavBar/>
    <ItemListContainer greeting={"Bienvenidos a nuestra página"}  />
    </div>
  )

}

export default App
