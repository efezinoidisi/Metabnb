import styled from 'styled-components';

const Nft = styled.div`
  background: linear-gradient(124.4deg, #ffffff 10.8%, #ffffff 87.34%);
  border: 1px solid #d7d7d7;
  border-radius: 15px;
  padding: 1.2rem;
  margin-bottom: 2rem;
  max-width: 20rem;
  margin-inline: auto;

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
    padding: 1rem;
    font-size: 0.7rem;
  }

  @media (min-width: 1024px) {
    margin: 0;
    padding: 0.7rem;

    p,
    h6 {
      font-size: 0.6rem;
    }
  }

  @media (min-width: 1200px) {
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

const NftListStyle = styled.div`
  display: grid;
  width: 100%;
  gap: 1rem;

  @media (width>=37.5rem) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (width>= 50rem) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (width>=75rem) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1333px) {
    gap: 1rem;
  }
`;

export { Nft, ButtonStyle, NftListStyle };
