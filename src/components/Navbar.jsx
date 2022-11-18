import logo from "../images/logo.svg";
import { NavbarStyle } from "../styles/Navbar.styled";
import MobileNav from "./MobileNav";
import Navlinks from "./Navlinks";

const Navbar = ({ setIsOpen, setIsShow, isShow }) => {
	return (
		<NavbarStyle>
			<div className="nav-logo">
				<img src={logo} alt="Meta bnb logo" id="logo" />
			</div>

			<MobileNav
				setIsShow={setIsShow}
				isShow={isShow}
				setIsOpen={setIsOpen}
				title="nav--mobile"
			/>
			<div className="desktop">
				<Navlinks />

				<button type="button" onClick={() => setIsOpen(true)}>
					Connect wallet
				</button>
			</div>
		</NavbarStyle>
	);
};

export default Navbar;
