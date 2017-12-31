import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Title } from './Home.styled';
import BandCard from './Card';

const Home = (props) => (
  <div>
  <Title>Rock and roll music from Golden, CO.</Title>
  <Wrapper>
    <Link to={"/HundredsOfThem"}>
    <BandCard>Hundreds of Them</BandCard>
    </Link>
    <BandCard>i am artiste</BandCard>
    <BandCard>Cream/You Please</BandCard>
    <BandCard>Left On Maple</BandCard>
    <BandCard>3 Card Monty</BandCard>
    <BandCard>Say What They Mean</BandCard>
    <BandCard>Smile For My Camera</BandCard>
  </Wrapper>
  </div>
);

export default Home;
