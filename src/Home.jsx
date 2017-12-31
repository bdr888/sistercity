import React from 'react';
import { Wrapper, Title } from './Home.styled';
import BandCard from './Card';
import crowd from './crowd.png';
import maple from './maple.png';
import creamer from './creamer.jpg';
import cards from './cards.jpg';
import camera from './camera.png';
import artist from './artist.png';

const Home = (props) => (
  <div>
  <Wrapper>
      <BandCard artist={"/3CardMonty"} image={cards}>3 Card Monty</BandCard>
      <BandCard artist={"/CreamYouPlease"} image={creamer}>Cream/You Please</BandCard>
      <BandCard artist={"/HundredsOfThem"} image={crowd}>Hundreds of Them</BandCard>
      <BandCard artist={"/iamartiste"} image={artist}>iamartiste</BandCard>
      <BandCard artist={"/LeftOnMaple"} image={maple}>Left On Maple</BandCard>
      <BandCard artist={"/SmileForMyCamera"} image={camera}>Smile For My Camera</BandCard>
  </Wrapper>
  <Title> Punk rock music from Golden, CO.</Title>
  </div>
);

export default Home;
