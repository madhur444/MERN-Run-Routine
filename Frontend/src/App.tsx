import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Home from './routes/Home'
import "./index.css"
const App = () => {
  return (
<BrowserRouter>
<div> 
<Home/>
    </div>
</BrowserRouter>
    
  )
}

export default App