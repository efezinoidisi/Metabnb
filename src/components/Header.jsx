import HeaderContent from "./HeaderContent";
import { Head, HeaderSection, HImages } from "../styles/Header.styled";
import group from "../images/group1.png";

const Header = () => {
	return (
		<Head>
			<HeaderSection>
				<HeaderContent />
				<HImages>
					<img src={group} alt="nft pictures" />
				</HImages>
			</HeaderSection>
		</Head>
	);
};

export default Header;
