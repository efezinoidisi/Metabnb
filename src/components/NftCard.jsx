import Stars from "./Stars";
import { Nft } from "../styles/NftCard.styled";
const NftCard = ({ img, description, name, price, distance, duration }) => {
	return (
		<Nft>
			<img src={img} alt={description} />
			<div className="card--contents">
				<div className="card--first-row">
					<p>{name}</p>
					<h6>{price}</h6>
				</div>
				<div className="card--second-row">
					<p>{distance}</p>
					<p>{duration}</p>
				</div>
			</div>
			<Stars />
		</Nft>
	);
};

export default NftCard;
