import "./MusicCard.css"
const MusicCard = ({songBanner, songName, singer, albumName}) => {
	return (
		<>
			<div className="song-card-dashboard">
				<img width="40" src={songBanner} alt="hi"></img>
				<div className="song-details">
					<p>{songName}</p>
					<p>{albumName} {singer}</p>
				</div>
			</div>

		</>

		)
}

export default MusicCard