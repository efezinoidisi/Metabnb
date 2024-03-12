import styled from 'styled-components';

const HomeStyle = styled.div`
  width: 100%;
`;

const Section = styled.div`
  width: 92%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  align-items: center;
  flex-wrap: no-wrap;

  h2 {
    font-weight: 700;
    font-size: 18px;
    color: #000000;
    padding: 1rem 0;
  }

  @media (min-width: 768px) {
    width: 90%;
    h2 {
      font-size: 38px;
    }
  }

  @media (min-width: 1024px) {
    width: 85%;
    h2 {
      font-size: 3rem;
      padding: 1rem 0;
    }
  }
`;

const Logos = styled.div`
  display: flex;
  background: linear-gradient(90deg, #a02279 11.45%, #a02279 11.45%);
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 0.8rem;
  margin: 1rem 0;

  img {
    width: 25%;
  }

  @media (min-width: 900px) {
    padding: 0.4rem 8rem;

    img {
      width: 13%;
    }
  }
`;

const BoxStyle = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  padding: 1rem 1rem 0;
  background: linear-gradient(90deg, #a02279 11.45%, #a02279 11.45%);
  border: 1px solid #000000;
  color: #fff;
  gap: 2rem;

  h3 {
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 40px;
    background: linear-gradient(124.4deg, #ffffff 10.8%, #ffffff 87.34%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
  }

  p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    background: linear-gradient(124.4deg, #ffffff 10.8%, #ffffff 87.34%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 2rem;
  }

  .content {
    margin-bottom: 1rem;
    text-align: center;
  }
  button {
    background: linear-gradient(124.4deg, #ffffff 10.8%, #ffffff 87.34%);
    border-radius: 8px;
    border: none;
    padding: 0.6rem 2rem;
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    opacity: 0.8;
  }

  img {
    width: 100%;
  }

  .box-images {
    text-align: center;
    width: 100%;
  }

  span {
    background: linear-gradient(90deg, #a02279 11.45%, #a02279 11.45%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 4rem;

    h3 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1rem;
      line-height: 1.5;
    }

    img {
      width: 100%;
    }

    .content {
      flex-basis: 50%;
      text-align: left;
    }

    .box-images {
      width: 50%;
    }
  }

  @media (min-width: 1024px) {
    width: 100%;
    flex-direction: row;
    position: relative;
    padding: 3rem;
    margin-top: 2rem;

    h3 {
      font-size: 3rem;
      line-height: 60px;
    }

    p {
      font-size: 1.1rem;
      line-height: 2.5;
    }

    .content {
      width: 50%;
      padding: 0 2rem;
    }

    img {
      width: 100%;
    }
  }
`;

export { HomeStyle, Section, Logos, BoxStyle };
