import "./Sidebar.css"
import Logo from "./Logo.jsx"

const Sidebar = () => {

  return (

    <div className="sidebar">
      <nav className="menu">
        <a href="#" className="sidebar-logo"><Logo/></a>
        <a href="#Home" className="menu-links"> Home </a>
        <a href="#Library" className="menu-links"> Library </a>
        <a href="#Search" className="menu-links"> Search </a>
      </nav>
    </div>



    )

}

export default Sidebar