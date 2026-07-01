import React from 'react'
import { Link,Routes,Route } from 'react-router-dom'
import SignUp from './SignUp'
import Login from './Login'
const Home = () => {
  return (
    <div>
<nav> 
    <img src="./public/H-logo dark.png"  alt="logo" height={100} width={300} />
    <Link to="/">Home</Link>
    <Link to="/SingUp"> SingUp</Link>
    <Link to="/Login">Login</Link>
</nav>
<Routes>
    
    <Route path='/SignUp' element={<SignUp/>}/>
    <Route path='/Login' element={<Login/>}/>
    
    </Routes>    </div>
  )
}

export default Home
