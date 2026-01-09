import Login from './pages/Login/Login.jsx';
import SignUp from './pages/SignUp/SignUp.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Library from './pages/Library/Library.jsx';
import Search from './pages/Search/Search.jsx';
import MusicPlayer from './pages/MusicPlayer/MusicPlayer.jsx';
import Profile from './pages/Profile/Profile.jsx';


import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {


	return(

		<BrowserRouter>
		<Routes>
			<Route path="/" element = {<Login/>}/>
			<Route path="/login" element = {<Login/>}/>
			<Route path="/signup" element = {<SignUp/>}/>
			<Route path="/dashboard" element = {<Dashboard/>}/>
			<Route path="/library" element = {<Library/>}/>
			<Route path="/search" element = {<Search/>}/>
			<Route path="/musicplayer/:type/:id" element={<MusicPlayer />} />
			<Route path="/profile" element = {<Profile/>}/>


			

		</Routes>
		</BrowserRouter>




		);



}

export default App