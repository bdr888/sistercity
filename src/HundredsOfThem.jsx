import React from 'react';
import {
  Description,
  Image,
  Lineup,
  SpotifyEmbed,
  Title,
  Record,
  Releases,
  Wrapper
} from './Artist.styled';
import image from './hundredsofthem.jpg'
// import thankYou from './Thankyou.jpg'

const HundredsOfThem = () => (
  <Wrapper>
    <Title>Hundreds of Them</Title>
    <Image src={image}/>
    <Description>
      Hundreds of Them played boring art post rock punk music. They spent more time philospophizing about the sympathetic vibrations of their imagined triumviratee than playing music, which is not very punk rock. They first practiced at 645 Arapahoe in a basement with a dirt floor. Then they took residence in those halcyon days ggat 2005 Upland, The Chicken Coop. 
    </Description>
    <Lineup>Guitar/Keyboard - Josh Morris</Lineup>
    <Lineup>Bass/Vocals - Eric Binkley</Lineup>
    <Lineup>Drums/Percussion - Brian Ridge</Lineup>
    <Releases>Releases</Releases>
    <Record>Thank You</Record>
    {/* <Image src={thankYou} /> */}
    <Record>2009 (SR-6)</Record>
    <SpotifyEmbed>
      <iframe
        title="HoT-ThankYou"
        src="https://open.spotify.com/embed/user/etsitramai/playlist/5HSbBVPN8N7JmJiWYgsKfm"
        width="400"
        height="500"
        frameborder="0"
        allowtransparency="true">
      </iframe>
    </SpotifyEmbed>
  </Wrapper>
);

export default HundredsOfThem;
