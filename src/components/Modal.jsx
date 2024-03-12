import Button from './Button';
import close from '../images/close.svg';
import wolf from '../images/wolf.png';
import wallet from '../images/wallet.png';
import ReactDOM from 'react-dom';
import { ModalStyles, Overlay } from '../styles/Navbar.styled';
import { useModal } from '../context/modal';

const Modal = () => {
  const { toggleModal } = useModal();

  return ReactDOM.createPortal(
    <>
      <Overlay onClick={toggleModal} />
      <ModalStyles>
        <h3>
          Connect your wallet
          <button type='button' onClick={toggleModal} id='close'>
            <img src={close} alt='close icon' />
          </button>
        </h3>

        <p>Choose your preferred wallet</p>

        <Button src={wolf} alt='metamask logo' name='Metamask' />

        <Button src={wallet} alt='wallet connect logo' name='WalletConnect' />
      </ModalStyles>
    </>,

    document.getElementById('portal')
  );
};

export default Modal;
