import loc from '../images/loc.png';
import { allData } from '../data/homepage_data';
import NftList from '../components/NftList';
import { PlaceStyles } from '../styles/Place.styled';

const Place = () => {
  return (
    <PlaceStyles>
      <div className='options'>
        <ul>
          <li>Resturant</li>
          <li>Cottage</li>
          <li>Castle</li>
          <li>fantast city</li>
          <li>beach</li>
          <li>Carbins</li>
          <li>Off-grid</li>
          <li>Farm</li>
        </ul>

        <button type='button'>
          Location
          <img src={loc} alt='icon' />
        </button>
      </div>

      <div className='nft-list' style={{ marginBottom: '4rem' }}>
        <NftList details={allData} />
      </div>
    </PlaceStyles>
  );
};

export default Place;
