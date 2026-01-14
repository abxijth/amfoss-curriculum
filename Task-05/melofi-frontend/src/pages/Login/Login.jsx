import InputField from "../../components/InputField.jsx";
import Button from "../../components/Button.jsx"
import Logo from "../../components/Logo.jsx"
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    


    const data = {
      email: email,
      password: password,
    };

    try {

      const response = await fetch("http://127.0.0.1:5000/api/login", {method: 'POST', headers: {'Content-Type': 'application/json',}, body : JSON.stringify(data),});

      const result = await response.json();

      if (response.ok) {
        localStorage.setItem("token", result.token);
        console.log("Login Success");
        navigate("/dashboard");
      
      } else {
        console.error("Login Failed");
     } 

    } catch (error) {
        console.error("Backend Down");
    }


  }



	return (
		<>

			<div className="login-container">

				<Logo className="login-page-logo"/>
        
        <form className="login-form" onSubmit={handleSubmit}>
  				<InputField type="email" name="email" id="email" className="login-page-input-field" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
	  			<InputField type="password" name="password" id="password" className="login-page-input-field" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
		  		<Button text="Login" type="submit" className="login-btn"/>
        </form>

			  	<p className="forgot-password"><u>forgot password?</u></p>
				<p>New to MeloFi? <Link to="/signup"><u>Create an account</u></Link></p>

			</div>

		</>




		)

}

export default Login 



