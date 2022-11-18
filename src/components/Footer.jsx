import logo from "../images/image23.png";
import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";
import FooterContent from "./FooterContent";
import { FooterStyle } from "../styles/Footer.styled";
import footerData from "../data/footer_data";

const Footer = () => {
	return (
		<FooterStyle>
			<div className="first-section">
				<img src={logo} alt="meta bnb logo" className="logo" />

				<div className="socials">
					<img src={facebook} alt="facebook icon" />
					<img src={instagram} alt="instagram icon" />

					<img src={twitter} alt="twitter icon" />
				</div>

				<p id="top">&copy; 2022 Metabnb</p>
			</div>
			{footerData.map((data) => (
				<FooterContent
					key={data.id}
					title={data.title}
					first={data.first}
					second={data.second}
					third={data.third}
					fourth={data.fourth}
				/>
			))}

			<p id="bottom">&copy; 2022 Metabnb</p>
		</FooterStyle>
	);
};

export default Footer;
