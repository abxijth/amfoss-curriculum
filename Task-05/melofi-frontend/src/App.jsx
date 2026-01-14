import Login from './pages/Login/Login.jsx';
import SignUp from './pages/SignUp/SignUp.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Library from './pages/Library/Library.jsx';
import Search from './pages/Search/Search.jsx';
import MusicPlayer from './pages/MusicPlayer/MusicPlayer.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
 

import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {


	return(

		<BrowserRouter>
		<Routes>
			<Route path="/" element = {<Login/>}/>
			<Route path="/login" element = {<Login/>}/>
			<Route path="/signup" element = {<SignUp/>}/>
			<Route path="/dashboard" element = {<ProtectedRoute> <Dashboard/> </ProtectedRoute>}/>
			<Route path="/library" element = {<ProtectedRoute> <Library/> </ProtectedRoute>}/>
			<Route path="/search" element = {<ProtectedRoute> <Search/> </ProtectedRoute>}/>
			<Route path="/musicplayer/:type/:id" element={<ProtectedRoute> <MusicPlayer/> </ProtectedRoute>} />


			

		</Routes>
		</BrowserRouter>




		);



}

export default App
