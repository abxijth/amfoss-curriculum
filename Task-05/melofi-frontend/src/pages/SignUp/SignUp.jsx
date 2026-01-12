import InputField from "../../components/InputField.jsx";
import Button from "../../components/Button.jsx"
import Logo from "../../components/Logo.jsx"
import "./SignUp.css";
import {Link, useNavigate} from "react-router-dom";
import { useState } from "react";



const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const handleSignup = async (event) => {
    event.preventDefault();

    const data = {
      email: email,
      username: username,
      password: password,
    };
    
    try {
      const response = await fetch("http://127.0.0.1:5000/api/register", {method: 'POST', headers: {"Content-Type": 'application/json',}, body: JSON.stringify(data),});
      
      const result = await response.json();

      if (response.ok) {
        console.log("Registered Successfully");
        navigate("/login");


      } else {
        console.log("Registration Failed");
        navigate("/signup")
      }
 

    } catch(error) {
      console.error("Backend Down");
    }


  }

	return (
		<>
			<div className="signup-container">

				<Logo className="signup-page-logo"/>

        <form className="signup-form" onSubmit={handleSignup}>
  				<InputField className="signup-page-input-field" type="email" name="email" id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
	  			<InputField className="signup-page-input-field" type="username" name="username" id="username" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
		  		<InputField className="signup-page-input-field" type="password" name="password" id="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
		  		<Button className="signup-btn" text="Create account" type="submit"/>
        </form>

				<p>Already have an account?&nbsp;&nbsp; <Link to="/login"><u className="sign-in-link">Sign in</u></Link></p>

			</div>

		</>



		)

}

export default SignUp



