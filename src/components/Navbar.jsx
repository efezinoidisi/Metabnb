import { Mobile, Overlay } from '../styles/Navbar.styled';
import { CgMenu } from 'react-icons/cg';
import { TfiClose } from 'react-icons/tfi';
import { useModal } from '../context/modal';
import logo from '../images/logo.svg';
import { NavbarStyle } from '../styles/Navbar.styled';
import Navlinks from './Navlinks';
import { useState } from 'react';

export default function Navbar() {
  const { toggleModal } = useModal();
  const [isMobileMenuOpen, setIsMobileMeuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMeuOpen((prev) => !prev);
  };

  return (
    <NavbarStyle>
      <div className='nav-logo'>
        <img src={logo} alt='Meta bnb logo' id='logo' />
      </div>

      <CgMenu
        className='icon'
        onClick={toggleMobileMenu}
        size={34}
        color='purple'
      />

      {isMobileMenuOpen ? (
        <MobileNav toggleMenu={toggleMobileMenu} isMenu={isMobileMenuOpen} />
      ) : null}
      <div className='desktop'>
        <Navlinks />

        <button type='button' onClick={toggleModal}>
          Connect wallet
        </button>
      </div>
    </NavbarStyle>
  );
}

// Moible navbar
const MobileNav = ({ toggleMenu, isMenu }) => {
  const { toggleModal } = useModal();

  const handleToggle = () => {
    if (isMenu) {
      toggleMenu();
    }
    toggleModal();
  };

  return (
    <>
      <Overlay onClick={toggleMenu} />
      <Mobile className='nav--mobile'>
        <TfiClose className='icon close' onClick={toggleMenu} size={40} />
        <Navlinks toggleMenu={toggleMenu} />

        <button type='button' onClick={handleToggle} id='button1'>
          Connect wallet
        </button>
      </Mobile>
    </>
  );
};
