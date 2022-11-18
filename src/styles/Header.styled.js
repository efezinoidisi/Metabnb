import styled from "styled-components";

const Head = styled.header`
	width: 92%;
	margin: 0 auto;
	position: relative;
	@media (min-width: 768px) {
		margin-bottom: 3rem;
		width: 90%;
	}

	@media (min-width: 1024px) {
		width: 85%;
	}
`;

const HeaderSection = styled.div`
	display: flex;
	flex-direction: column-reverse;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	margin: 1rem 0 3rem;

	@media (min-width: 768px) {
		flex-direction: row;
		align-items: flex-start;
		gap: 3rem;
		margin: 3rem 0 0;
	}

	@media (min-width: 1024px) {
		margin: 0;
	}
`;

const HContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	h1 {
		font-weight: 400;
		font-size: 1.6rem;
		line-height: 110%;
		letter-spacing: -0.02em;
		color: #434343;
		margin-bottom: 2rem;
	}

	h1 span {
		background: linear-gradient(to right, #a02279 100%, #ffc089 60%);
		font-weight: 600;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	p {
		font-weight: 400;
		font-size: 1rem;
		line-height: 27px;
		color: #434343;

		margin-bottom: 2rem;
	}

	input {
		width: 60%;
		padding: 0.5rem;
		background-color: rgba(247, 247, 247, 0.1);
		border: 1px solid #a3a3a3;
		border-radius: 8px 0px 0px 8px;
		outline: none;

		font-weight: 400;
		font-size: 0.8rem;
		line-height: 130%;
		color: #b8b8b8;
	}

	button {
		cursor: pointer;
		background: linear-gradient(90deg, #a02279 11.45%, #a02279 11.46%);
		border: none;
		border-radius: 0px 8px 8px 0px;
		padding: 0.58rem 2rem;
		font-weight: 400;
		font-size: 0.8rem;
		color: #fff;
		transition: 0.3s;
	}

	button:hover {
		opacity: 0.8;
	}

	@media (min-width: 768px) {
		flex-basis: 50%;

		h1 {
			font-size: 1.6rem;
			line-height: 1.5;
		}

		input {
			width: 50%;
		}

		p {
			font-size: 0.8rem;
		}
	}

	@media (min-width: 1024px) {
		flex-basis: 55%;
		input {
			width: 60%;
			padding: 0.6rem;
		}

		button {
			padding: 0.69rem 4rem;
		}
		h1 {
			font-size: 2.5rem;

			line-height: 78.4px;
		}

		p {
			line-height: 35px;
			font-size: 1.4rem;
		}
	}

	@media (min-width: 1200px) {
		h1 {
			font-size: 3rem;
		}
	}
`;

const HImages = styled.div`
	width: 90%;
	padding: 0 2rem;
	justify-content: center;
	align-items: center;

	img {
		width: 100%;
	}
	}

	@media (min-width: 768px) {
		flex-basis:50%;
	}

	@media (min-width: 1024px) {
		flex-basis: 45%;
	}
`;

export { Head, HeaderSection, HContent, HImages };
