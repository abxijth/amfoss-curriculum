import {Login} from './pages/Login/Login.jsx'
import {SignUp} from './pages/SignUp/SignUp.jsx'
import {Dashboard} from './pages/Dashboard/Dashboard.jsx'
import {HashRouter, Routes, Route} from 'react-router-dom'


function App() {

	return(
		<>
			<HashRouter>
				<Routes>
					<Route path="/" element={<Login/>}/>
					<Route path="/home" element={<Dashboard/>}/>
					<Route path="/signup" element={<SignUp/>}/>

				</Routes>


			</HashRouter>

		</>




		);



}

export default App

