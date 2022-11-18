import Header from "../components/Header";
import { details1, details2 } from "../data/homepage_data";
import NftList from "../components/NftList";
import { HomeStyle, Section, Logos } from "../styles/Home.styled";
import mbtoken from "../images/mbtoken_logo.svg";
import metamask from "../images/metamask_logo.svg";
import opensea from "../images/opensea_logo.svg";
import Box from "../components/Box";
import Modal from "../components/Modal";
// import { useState, createContext } from "react";
// export const OpenContext = createContext(0);

const Home = ({ isOpen, setIsOpen }) => {
	return (
		<HomeStyle>
			<Header />
			<div style={isOpen ? OverLay : null} onClick={() => setIsOpen(false)} />
			<Modal open={isOpen} setIsOpen={setIsOpen} />
			<Logos>
				<img src={mbtoken} alt="mbtoken logo" />
				<img src={metamask} alt="metamask logo" />
				<img src={opensea} alt="opensea logo" />
			</Logos>
			<Section>
				<h2>Inspiration for your next adventure</h2>

				<NftList details={details1} />
				<NftList details={details2} />
			</Section>

			<Box />
		</HomeStyle>
	);
};

export default Home;

const OverLay = {
	position: "fixed",
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	backgroundColor: "rgba(64, 64, 64, 0.3)",
	zIndex: 0,
};
