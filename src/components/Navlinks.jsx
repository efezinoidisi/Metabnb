import { Link } from "react-router-dom";
import { Navsty } from "../styles/Navbar.styled";

const Navlinks = ({ setIsShow }) => {
	return (
		<Navsty>
			<Link to="/" onClick={() => setIsShow(false)}>
				Home
			</Link>

			<Link to="/place-to-stay" onClick={() => setIsShow(false)}>
				Place to stay
			</Link>

			<Link to="/" onClick={() => setIsShow(false)}>
				NFTs
			</Link>

			<Link to="/" onClick={() => setIsShow(false)}>
				community
			</Link>
		</Navsty>
	);
};

export default Navlinks;
