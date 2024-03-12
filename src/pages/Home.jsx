import Header from '../components/Header';
import { homepageData } from '../data/homepage_data';
import NftList from '../components/NftList';
import { HomeStyle, Section, Logos } from '../styles/Home.styled';
import mbtoken from '../images/mbtoken_logo.svg';
import metamask from '../images/metamask_logo.svg';
import opensea from '../images/opensea_logo.svg';
import Box from '../components/Box';

const Home = () => {
  return (
    <HomeStyle>
      <Header />
      <Logos>
        <img src={mbtoken} alt='mbtoken logo' />
        <img src={metamask} alt='metamask logo' />
        <img src={opensea} alt='opensea logo' />
      </Logos>
      <Section>
        <h2>Inspiration for your next adventure</h2>

        <NftList details={homepageData} />
      </Section>

      <Box />
    </HomeStyle>
  );
};

export default Home;
