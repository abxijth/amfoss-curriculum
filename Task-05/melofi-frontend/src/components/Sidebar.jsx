import "./Sidebar.css"
import Logo from "./Logo.jsx"
import {Link} from "react-router-dom"
import { FaUserCircle, FaHouseDamage, FaList } from "react-icons/fa";

const Sidebar = () => {

  return (

    <div className="sidebar">
      <nav className="menu">
        <Link to="/login" className="sidebar-logo"><Logo/></Link>
        <Link to="/profile" className="profile-links"> <FaUserCircle  className="profile-icon"/> </Link>
        <Link to="/dashboard" className="menu-links"> Home </Link>
        <Link to="/library" className="menu-links"> Library </Link>
        <Link to="/search" className="menu-links"> Search </Link>
      </nav>
    </div>



    )

}

export default Sidebar