import { useNavigate } from "react-router-dom";
import "./LogoutButton.css"


const LogoutButton = () => {
  const navigate = useNavigate();
  const handlelogout = () => {
    localStorage.removeItem("token");

    navigate("/login")
    alert("Logged out Successfully")

    
  }

  return (
    <>
      <button type="button" onClick={handlelogout} className="log-out">Log out</button>
    </>

  );
    
  
}


export default LogoutButton;

