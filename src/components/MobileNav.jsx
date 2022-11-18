import Navlinks from "./Navlinks";
import { Mobile } from "../styles/NftCard.styled";
import { CgMenu } from "react-icons/cg";
import { TfiClose } from "react-icons/tfi";

const MobileNav = ({ isShow, setIsShow, setIsOpen, title }) => {
	const handleClick = () => {
		setIsShow(false);
		setIsOpen(true);
	};

	const name = "displayMenu";
	return (
		<Mobile className={title}>
			<CgMenu className="icon" onClick={() => setIsShow(!isShow)} />

			<div className={isShow ? name : null}>
				{isShow && (
					<TfiClose className="icon close" onClick={() => setIsShow(!isShow)} />
				)}
				{isShow && <Navlinks setIsShow={setIsShow} />}
				{isShow && (
					<button type="button" onClick={handleClick} id="button1">
						Connect wallet
					</button>
				)}
			</div>
		</Mobile>
	);
};

export default MobileNav;
