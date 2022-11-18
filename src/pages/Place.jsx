import loc from "../images/loc.png";
import { details1, details2, details3, details4 } from "../data/homepage_data";
import NftList from "../components/NftList";
import { PlaceStyles } from "../styles/Place.styled";
import Modal from "../components/Modal";

const Place = ({ isOpen, setIsOpen }) => {
	return (
		<PlaceStyles>
			<div className="options">
				<ul>
					<li>Resturant</li>
					<li>Cottage</li>
					<li>Castle</li>
					<li>fantast city</li>
					<li>beach</li>
					<li>Carbins</li>
					<li>Off-grid</li>
					<li>Farm</li>
				</ul>

				<button type="button">
					Location
					<img src={loc} alt="icon" />
				</button>
			</div>

			<div style={isOpen ? OverLay : null} />
			<Modal open={isOpen} setIsOpen={setIsOpen} />

			<div className="nft-list" style={{ marginBottom: "4rem" }}>
				<NftList details={details2} />
				<NftList details={details1} />
				<NftList details={details3} />
				<NftList details={details4} />
			</div>
		</PlaceStyles>
	);
};

export default Place;

const OverLay = {
	position: "fixed",
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	backgroundColor: "rgba(64, 64, 64, 0.3)",
	zIndex: 0,
};
