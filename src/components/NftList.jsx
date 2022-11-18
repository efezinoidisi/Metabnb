import NftCard from "./NftCard";
import { NftListStyle } from "../styles/NftCard.styled";

const NftList = ({ details }) => {
	return (
		<NftListStyle>
			{details.map((detail) => (
				<NftCard
					key={detail.id}
					img={detail.img}
					description={detail.description}
					name={detail.name}
					price={detail.price}
					distance={detail.distance}
					duration={detail.duration}
				/>
			))}
		</NftListStyle>
	);
};

export default NftList;
