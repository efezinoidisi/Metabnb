import styled from "styled-components";

const Nft = styled.div`
	background: linear-gradient(124.4deg, #ffffff 10.8%, #ffffff 87.34%);
	border: 1px solid #d7d7d7;
	border-radius: 15px;
	padding: 1.2rem;
	margin-bottom: 2rem;

	&:hover {
		opacity: 0.8;
	}
	img {
		width: 100%;
		margin-bottom: 0.5rem;
	}

	.card--first-row,
	.card--second-row {
		display: flex;
		justify-content: space-between;
		margin-bottom: 1rem;
	}

	p {
		font-weight: 400;
		font-size: 10px;
		line-height: 13px;
		color: #434343;
	}

	h6 {
		font-weight: 700;
		font-size: 10px;
		line-height: 13px;
		color: #434343;
	}

	@media (min-width: 768px) {
		width: 45%;
		padding: 1rem;
		font-size: 0.7rem;
	}

	@media (min-width: 1024px) {
		width: 24%;
		margin: 0;
		padding: 0.7rem;

		p,
		h6 {
			font-size: 0.6rem;
		}
	}

	@media (min-width: 1200px) {
		width: 23%;
		p,
		h6 {
			font-size: 0.7rem;
		}
	}
`;

const ButtonStyle = styled.button`
	width: 80%;
	display: flex;
	padding: 0.8rem 1rem;
	background-color: #f8f9fa;
	border: 1px solid #cfd8dc;
	border-radius: 12px;
	justify-content: center;
	align-items: center;
	margin: 0 32px 1rem;
	gap: 0.6rem;
	cursor: pointer;
	transition: 0.3s;

	&:hover {
		opacity: 0.8;
	}

	#logo {
		width: 5%;
	}

	#last {
		margin-left: auto;
	}

	span {
		font-weight: 600;
		font-size: 18px;
		line-height: 23px;
		/* identical to box height */

		color: #000000;
	}

	@media (min-width: 768px) {
		width: 90%;
	}
`;

const Mobile = styled.div`
	button {
		border: none;
		background-color: #fff;
	}

	.icon {
		font-size: 2rem;
		color: #434343;
	}

	.close {
		position: absolute;
		top: 20%;
		right: 10%;
	}

	.displayMenu {
		position: fixed;
		top: 1%;
		left: 30%;
		background-color: #fff;
		border: 1px solid #a02279;
		border-radius: 10px;
		z-index: 3;
		width: 70%;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100vh;
		transition: ease-in-out 0.3s;
	}

	#button1 {
		background: linear-gradient(90deg, #a02279 11.45%, #a02279 11.45%);
		border: none;
		border-radius: 10px;
		font-size: 1rem;
		font-weight: 400px;
		padding: 0.5rem 1.3rem;
		color: #fff;
		cursor: pointer;
		transition: 0.2s;
	}

	#button1:hover {
		opacity: 0.8rem;
	}
`;

const ModalStyles = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: #fff;
	z-idex: 10000;
	border-radius: 16px;
	width: 90%;
	transition: ease-in-out 0.3s;
	h3 {
		display: flex;
		justify-content: space-between;
		padding: 20px 25px;

		font-weight: 700;
		font-size: 1.2rem;
		line-height: 1.5;

		color: #333333;
		border-bottom: 1px solid #cfd8dc;
	}

	#close {
		background-color: #fff;
		border: none;
		cursor: pointer;
	}

	p {
		font-weight: 400;
		font-size: 15px;
		line-height: 1;
		padding: 18px 25px;
		color: #333333;
	}

	@media (min-width: 768px) {
		width: 50%;
		h3 {
			padding: 24px 32px;
			font-size: 24px;
			line-height: 30px;
		}

		p {
			font-size: 16px;
			line-height: 20px;
			padding: 18px 32px;
		}
	}
`;

const NftListStyle = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: no-wrap;
	width: 100%;
	gap: 1rem;

	@media (min-width: 768px) {
		flex-direction: row;
		flex-wrap: wrap;
		flex-basis: 50%;
	}

	@media (min-width: 889px) {
		gap: 0.6rem;
	}

	@media (min-width: 1024px) {
		flex-wrap: no-wrap;
		padding: 1.5rem 0 0;
	}

	@media (min-width: 1333px) {
		gap: 1rem;
	}
`;

export { Nft, ButtonStyle, Mobile, ModalStyles, NftListStyle };
