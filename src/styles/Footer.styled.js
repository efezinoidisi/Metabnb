import styled from "styled-components";

const FooterStyle = styled.footer`
	background-color: #1d1d1e;
	color: #f7f7f7;
	padding: 2rem 1rem;
	display: flex;
	flex-direction: column;
	width: 100%;

	.logo {
		width: 40%;
		margin-bottom: 2rem;
	}

	.first-section {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-bottom: 2rem;
	}

	.socials {
		display: flex;
		gap: 2rem;
	}

	#top {
		display: none;
	}
	p {
		font-weight: 400;
		font-size: 1rem;
		line-height: 16px;
	}

	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
		padding: 4rem;

		#bottom {
			display: none;
		}

		.logo {
			width: 60%;
		}
		#top {
			display: block;
		}

		.socials {
			margin: 2rem 0 1rem;
		}
	}

	@media (min-width: 1024px) {
		padding: 5rem;
	}
`;

const FooterContentStyle = styled.div`
	margin-bottom: 0.9rem;
	h6 {
		font-size: 1.2rem;
		margin-bottom: 0.4rem;
		font-weight: 700;
		line-height: 22px;
	}
	ul {
		list-style: none;
	}

	li {
		font-size: 0.8rem;
		font-weight: 400;
		line-height: 35px;
		color: #f1f3f9;
	}

	@media (min-width: 768px) {
		h6 {
			margin-bottom: 1rem;
		}
		li {
			padding-bottom: 1rem;
		}
	}
`;
export { FooterStyle, FooterContentStyle };
