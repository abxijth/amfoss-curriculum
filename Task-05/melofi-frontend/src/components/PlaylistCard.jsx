import "./PlaylistCard.css"

const PlaylistCard = ({playlistBanner, playlistName, playlistCreator}) => {

	return (
		<>
			<div className="playlist-card-dashboard">
				<img width="134" height="103" src={playlistBanner} alt="hi"></img>
				<div className="playlist-details">
					<p className="playlist-name">{playlistName}</p>
					<p className="playlist-creator">Playlist · {playlistCreator}</p>
				</div>
			</div>
		</>
	)

}

export default PlaylistCard