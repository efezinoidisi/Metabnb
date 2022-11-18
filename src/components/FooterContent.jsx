import { FooterContentStyle } from "../styles/Footer.styled";

const FooterContent = ({ title, first, second, third, fourth }) => {
	return (
		<FooterContentStyle>
			<h6>{title}</h6>
			<ul>
				<li>{first}</li>
				<li>{second}</li>
				<li>{third}</li>
				<li>{fourth}</li>
			</ul>
		</FooterContentStyle>
	);
};

export default FooterContent;
