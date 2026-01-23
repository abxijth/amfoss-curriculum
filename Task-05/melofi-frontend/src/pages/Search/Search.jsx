import Sidebar from '../../components/Sidebar.jsx'
import MusicCard from '../../components/MusicCard.jsx'
import "./Search.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
const API_BASE_URL = "https://free-music-api2.vercel.app"


const Search = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/getSongs`)
      .then(res => res.json())
      .then(data => {
        const normalized = data.map(song => ({
          id: song._id,
          songName: song.songName,
          songBanner: song.songBanner,
          singer: song.singer,
          albumName: song.albumname,
          audioUrl: song.url
        }))
        setSongs(normalized)
      })
  }, [])


	const [query, setQuery] = useState("")

	const filteredSongs = songs.filter((song) =>
		song.songName.toLowerCase().includes(query.toLowerCase()) ||
		song.albumName.toLowerCase().includes(query.toLowerCase()) ||
		song.singer.toLowerCase().includes(query.toLowerCase())
	)

	return (
		<div className="wrapper-search">
			<Sidebar />

			<div className="search-bar">
				<input
					type="text"
					placeholder="&#x1F50D;   What do you want to listen to??"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
			</div>

			<div className="search-content">
				{filteredSongs.length > 0 ? (
					filteredSongs.map((song) => (
						<Link
							to={`/musicplayer/song/${song.id}`}
							key={song.id}
						>
							<MusicCard
								songBanner={song.songBanner}
								songName={song.songName}
								albumName={song.albumName}
								singer={song.singer}
							/>
						</Link>
					))
				) : (
					<p className="no-results">No songs found</p>
				)}
			</div>
		</div>
	)
}

export default Search
