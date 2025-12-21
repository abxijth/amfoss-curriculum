import Sidebar from '../../components/Sidebar.jsx'
import MusicCard from '../../components/MusicCard.jsx'
import PlaylistCard from '../../components/PlaylistCard.jsx'
import Button from '../../components/Button.jsx'
import './Library.css'



const Library = () => {

	return (
		<>
			<div className="wrapper-library">
				<Sidebar/>
				<div className="top-section-library">
					<Button text="Playlist" type="submit" className="playlist-btn-library"/>
					<Button text="Liked" type="submit" className="liked-btn-library"/>
				</div>
			</div>
		</>



		);






}

export default Library