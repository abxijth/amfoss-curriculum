import InputField from "../../components/InputField.jsx";
import Button from "../../components/Button.jsx"
import Logo from "../../components/Logo.jsx"
import "./Login.css";
import { Link } from "react-router-dom";


const Login = () => {

	return (
		<>

			<div className="login-container">

				<Logo className="login-page-logo"/>
				<InputField type="email" name="email" id="email" className="login-page-input-field" placeholder="Enter your email"/>
				<InputField type="password" name="password" id="password" className="login-page-input-field" placeholder="Enter your password"/>
				<Link to="/dashboard"><Button text="Login" type="submit" className="login-btn"/></Link>
				<p className="forgot-password"><u>forgot password?</u></p>
				<p>New to MeloFi? <Link to="/signup"><u>Create an account</u></Link></p>

			</div>

		</>




		)

}

export default Login 



