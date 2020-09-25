import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
      
        <header className="banner-container">
            <Link to="/" > <button  >Home</button></Link> 
         <h1> Marvel Quiz</h1>
        </header>
        
    )
}
export default Header 