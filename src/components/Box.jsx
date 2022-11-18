import group from "../images/group.png";
import { BoxStyle } from "../styles/Home.styled";
const Box = () => {
	return (
		<BoxStyle>
			<div className="content">
				<h3>Metabnb NFTs</h3>
				<p>
					Discover our NFT gift cards collection. Loyal customers gets amazing
					gift cards which are traded as NFTs. These NFTs gives our customer
					access to loads of our exclusive services.
				</p>

				<button type="button">
					<span> Learn more</span>
				</button>
			</div>
			<div className="box-images">
				<img src={group} alt="nft pictures" />
			</div>
		</BoxStyle>
	);
};

export default Box;
