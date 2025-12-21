import InputField from "../../components/InputField.jsx";
import Button from "../../components/Button.jsx"
import Logo from "../../components/Logo.jsx"
import "./SignUp.css";
import {Link} from "react-router-dom"



const SignUp = () => {

	return (
		<>
			<div className="signup-container">

				<Logo className="signup-page-logo"/>
				<InputField className="signup-page-input-field" type="email" name="email" id="email" placeholder="Enter your email"/>
				<InputField className="signup-page-input-field" type="username" name="username" id="username" placeholder="Enter username"/>
				<InputField className="signup-page-input-field" type="password" name="password" id="password" placeholder="Enter password"/>
				<Button className="signup-btn" text="Create account" type="submit"/>
				<p>Already have an account?&nbsp;&nbsp; <Link to="/login"><u className="sign-in-link">Sign in</u></Link></p>

			</div>

		</>



		)

}

export default SignUp



