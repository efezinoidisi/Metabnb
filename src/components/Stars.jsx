import star from "../images/star.svg";
import styled from "styled-components";

const Star = styled.span`
	display: flex;
	width: 20%;
	gap: 2px;

	@media (min-width: 1024px) {
		width: 20%;
		gap: 5px;
	}
`;
const Stars = () => {
	return (
		<Star>
			<img src={star} alt="star icon" />
			<img src={star} alt="star icon" />
			<img src={star} alt="star icon" />
			<img src={star} alt="star icon" />
			<img src={star} alt="star icon" />
		</Star>
	);
};

export default Stars;
