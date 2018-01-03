import React from 'react';
import { Wrapper, Title } from './Home.styled';
import BandCard from './Card';
import Data from './data';

const Bands = Data.bands;

const Home = () => (
  <div>
    <Wrapper>
      {Bands.map(band => (
        <BandCard
          key={band.name}
          bandUrl={band.url}
          image={band.heroImage}
        >
          {band.name}
        </BandCard>
      ))}
    </Wrapper>
    <Title>Punk rock music from Golden, CO.</Title>
  </div>
);

export default Home;
