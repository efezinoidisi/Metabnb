import { ButtonStyle } from "../styles/NftCard.styled";

import arrow from "../images/arrow.svg";

const Button = ({ src, alt, name }) => {
	return (
		<ButtonStyle>
			<img src={src} alt={alt} id="logo" />
			<span>{name}</span>
			<img src={arrow} alt="next icon" id="last" />
		</ButtonStyle>
	);
};

export default Button;
