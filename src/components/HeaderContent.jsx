import { HContent } from "../styles/Header.styled";

const HeaderContent = () => {
	return (
		<HContent>
			<h1>
				Rent a <span>Place</span> away from <span>Home</span> in the
				<span> Metaverse</span>
			</h1>

			<p>
				we provide you access to luxury and affordable houses in the metverse,
				get a chance to turn your imagination to reality at your comfort zone
			</p>

			<div className="header--search">
				<input
					type="search"
					name="search"
					id="search"
					placeholder="Search for location"
				/>
				<button type="button">Search</button>
			</div>
		</HContent>
	);
};

export default HeaderContent;
