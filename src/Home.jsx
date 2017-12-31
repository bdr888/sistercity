import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Title } from './Home.styled';
import BandCard from './Card';
import crowd from './crowd.jpg';
import maple from './maple.png';
import creamer from './creamer.jpg';
import cards from './cards.jpg';
import camera from './camera.jpg';
import artist from './artist.jpg';

const Home = (props) => (
  <div>
  <Title>Rock and roll music from Golden, CO.</Title>
  <Wrapper>
      <BandCard artist={"/HundredsOfThem"} image={crowd}>Hundreds of Them</BandCard>
      <BandCard artist={"/iamartiste"} image={artist}>iamartiste</BandCard>
      <BandCard artist={"/CreamYouPlease"} image={creamer}>Cream/You Please</BandCard>
      <BandCard artist={"/LeftOnMaple"} image={maple}>Left On Maple</BandCard>
      <BandCard artist={"/3CardMonty"} image={cards}>3 Card Monty</BandCard>
      <BandCard artist={"/SmileForMyCamera"} image={camera}>Smile For My Camera</BandCard>
  </Wrapper>
  </div>
);

export default Home;
