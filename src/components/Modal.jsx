import Button from "./Button";
import close from "../images/close.svg";
import wolf from "../images/wolf.png";
import wallet from "../images/wallet.png";
import ReactDOM from "react-dom";
import { ModalStyles } from "../styles/NftCard.styled";
// import { useContext } from "react";
// import { OpenContext } from "../pages/Home";

const Modal = ({ open, setIsOpen }) => {
	if (!open) return null;

	return ReactDOM.createPortal(
		<ModalStyles>
			<h3>
				Connect your wallet
				<button type="button" onClick={() => setIsOpen(false)} id="close">
					<img src={close} alt="close icon" />
				</button>
			</h3>

			<p>Choose your preferred wallet</p>

			<Button src={wolf} alt="metamask logo" name="Metamask" />

			<Button src={wallet} alt="wallet connect logo" name="WalletConnect" />
		</ModalStyles>,

		document.getElementById("portal")
	);
};

export default Modal;
