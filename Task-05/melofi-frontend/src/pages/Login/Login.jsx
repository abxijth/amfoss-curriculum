import InputField from "../../components/InputField.jsx";
import Button from "../../components/Button.jsx"
import Logo from "../../components/Logo.jsx"
import "./Login.css";



const Login = () => {

	return (
		<>

			<div className="login-container">

				<Logo className="login-page-logo"/>
				<InputField type="email" name="email" id="email" className="login-page-input-field" placeholder="Enter your email"/>
				<InputField type="password" name="password" id="password" className="login-page-input-field" placeholder="Enter your password"/>
				<Button text="Login" type="submit" className="login-btn"/>
				<p><a href="https://google.com"  className="forgot-password"><u>forgot password?</u></a></p>
				<p>New to MeloFi? <a href="https://google.com"><u>Create an account</u></a></p>

			</div>

		</>




		)

}

export default Login 



