import styled from 'styled-components';

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

  .icon {
    font-size: 2rem;
    color: #434343;
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
    width: 90%;

    #logo {
      width: 8rem;
    }
    .icon {
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
  }
`;

const Mobile = styled.div`
  position: fixed;
  inset-block: 0;
  right: 0;
  background-color: #fff;
  border: 1px solid #a02279;
  border-top-left-radius: 3rem;
  z-index: 1000;
  width: 70%;
  padding: 7rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition: ease-in-out 0.6s;

  button {
    border: none;
    background-color: #fff;
  }

  .close {
    position: absolute;
    top: 2rem;
    left: -3rem;
    background-color: #fff;
    border-radius: 50%;
    padding: 0.6rem;

    &:hover {
      scale: 1.07;
    }
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
    transition: 0.3s;
  }

  #button1:hover {
    opacity: 0.8rem;
  }

  @media (width>=37.5rem) {
    width: 40%;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const ModalStyles = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  z-index: 10000;
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

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: black;
  opacity: 0.3;
  z-index: 50;
`;

export { NavbarStyle, Navsty, Mobile, ModalStyles, Overlay };
