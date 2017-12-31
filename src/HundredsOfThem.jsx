import React from 'react';
import {
  Description,
  Image,
  Lineup,
  SpotifyEmbed,
  Title,
  Record,
  Releases,
  Wrapper,
  LogoWrapper,
} from './Artist.styled';
import crowd from './crowd.png';

const HundredsOfThem = () => (
  <div>
    <Wrapper>
      <LogoWrapper>
        <Image src={crowd}/>
        <Title>Hundreds of Them</Title>
    <div>
      <Lineup>Guitar/Keyboard - Josh Morris</Lineup>
      <Lineup>Bass/Vocals - Eric Binkley</Lineup>
      <Lineup>Drums/Percussion - Brian Ridge</Lineup>
    </div>
      </LogoWrapper>
      <Description>
        Hundreds of Them played boring art post rock punk music. They spent more time philospophizing about the sympathetic vibrations of their imagined triumviratee than playing music, which is not very punk rock. They first practiced at 645 Arapahoe in a basement with a dirt floor. Then they took residence in those halcyon days ggat 2005 Upland, The Chicken Coop. 
      </Description>
    </Wrapper>
    <Releases>Releases</Releases>
    <Record>Thank You</Record>
    {/* <Image src={thankYou} /> */}
    <Record>2009 (SR-6)</Record>
    <SpotifyEmbed>
      <iframe
        title="HoT-ThankYou"
        src="https://open.spotify.com/embed?uri=spotify:user:etsitramai:playlist:5HSbBVPN8N7JmJiWYgsKfm&theme=white"
        width="400"
        height="500"
        frameBorder="0"
        allowtransparency="true">
      </iframe>
    </SpotifyEmbed>
  </div>
);

export default HundredsOfThem;
