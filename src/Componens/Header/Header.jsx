import { Link } from "react-router-dom"
import "./Header.css"

function Header() {
  return (
    <div className="Header">
     
      <div className="icons">
        <Link to="/"> <i class="fa-solid fa-house"></i></Link>
        <Link to="/add"> <i class="fa-solid fa-plus"></i></Link>
        <Link to="/list"> <i className="fas fa-list"></i></Link>
     
      
      
      </div>
      </div>
    
  )
}

export default Header