import styled from "styled-components";

const PlaceStyles = styled.div`
	width: 92%;
	margin: 0 auto;

	.options {
		margin-bottom: 3rem;
	}

	ul {
		list-style: none;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	li {
		padding-bottom: 0.2rem;
		font-weight: 400;
		font-size: 1rem;
		line-height: 25px;
		/* identical to box height */

		/* text black */

		color: #434343;
	}

	button {
		padding: 0.5rem 2rem;
		background: linear-gradient(124.4deg, #ffffff 10.8%, #ffffff 87.34%);
		border: 1px solid #b4b4b4;
		border-radius: 8px;
		font-size: 1rem;
		font-weight: 400;
		line-height: 19px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #333333;
		cursor: pointer;
		transition: 0.3s;
	}

	button:hover {
		opacity: 0.8;
	}

	img {
		padding-left: 0.9rem;
	}

	@media (min-width: 768px) {
		width: 90%;
		.options {
			display: flex;
			width: 100%;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 1rem;
		}
		ul {
			flex-wrap: no-wrap;
			width: 80%;
		}

		li {
			padding-bottom: 0;
			font-size: 1rem;
		}

		button {
			padding: 0.3rem 0.9rem;
		}
	}

	@media (min-width: 1024px) {
		width: 85%;

		li {
			font-size: 1.25rem;
		}
	}
`;

export { PlaceStyles };
