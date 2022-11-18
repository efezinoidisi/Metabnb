import styled from "styled-components";

const NavbarStyle = styled.nav`
	width: 92%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 2rem auto 0;
	padding-bottom: 1.5rem;

	.desktop {
		display: none;
	}

	#logo {
		width: 70%;
	}

	#menu {
		width: 50%;
	}

	@media (min-width: 768px) {
		margin-bottom: 0;
		width: 90%;

		#logo {
			width: 8rem;
		}
		.nav--mobile {
			display: none;
		}

		.desktop {
			display: flex;
			justify-content: space-between;
			width: 70%;
		}

		button {
			background: linear-gradient(90deg, #a02279 11.45%, #a02279 11.45%);
			border: none;
			border-radius: 10px;
			font-size: 1rem;
			font-weight: 400px;
			padding: 0.4rem 1rem;
			color: #fff;
			cursor: pointer;
			transition: 0.2s;
		}

		button:hover {
			opacity: 0.8;
		}
	}

	@media (min-width: 1024px) {
		padding-bottom: 5rem;
		width: 85%;
		#logo {
			width: 13rem;
		}

		.nav--list {
			width: 45%;
		}

		button {
			padding: 0.7rem 1.3rem;
		}
	}
`;

const Navsty = styled.nav`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	align-items: center;

	a {
		text-decoration: none;
		font-weight: 400;
		font-size: 1rem;
		line-height: 2.5rem;
		color: #434343;
		cursor: pointer;
		transition: 0.3s;
	}

	a:hover,
	a:focus-visible {
		color: #a02279;
	}
	@media (min-width: 768px) {
		width: 60%;
		flex-direction: row;
		ul {
			display: flex;
			justify-content: space-between;
			width: 100%;
			align-items: center;
		}

		a {
			font-size: 1rem;
			line-height: 2;
		}
	}

	@media (min-width: 1024px) {
		width: 70%;

		a {
			font-size: 1.3rem;
			line-height: 2;
		}
	} ;
`;

export { NavbarStyle, Navsty };
