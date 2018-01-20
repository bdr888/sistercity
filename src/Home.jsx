import React from 'react';
import { CardWrapper, HomeWrapper } from './Home.styled';
import BandCard from './Card';
import Data from './data';
// import Carousel from './Carousel';

const Bands = Data.bands;

const Home = () => (
  <HomeWrapper>
    <CardWrapper>
      {Bands.map(band => (
        <BandCard
          key={band.name}
          bandUrl={`/artists/${band.url}`}
          image={band.heroImage}
        >
          {band.name}
        </BandCard>
      ))}
    </CardWrapper>
    {/* <Carousel /> */}
  </HomeWrapper>
);

export default Home;
