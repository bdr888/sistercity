import React from 'react';
import {
  ContentWrapper,
  Description,
  Image,
  SpotifyEmbed,
  Title,
  Wrapper
} from './Artist.styled';

const LeftOnMaple = () => (
  <Wrapper>
    <Title>Left On Maple</Title>
    <ContentWrapper>
      <Image />
      <Description>
        Left on Maple played emo music blah blah blahblah
        blah blahblah blah blahblah blah blahblah blah blahblah 
        blah blahblah blah blahblah blah blahblah blah blahblah
         blah blahblah blah blahblah blah blahblah blah blahblah blah blah
      </Description>
    </ContentWrapper>
    <SpotifyEmbed>
    <iframe
        src="https://open.spotify.com/embed/album/4s3vR4B3qPc9U5Gs1NPxLR"
        width="400"
        height="620"
        frameborder="0"
        allowtransparency="true">
      </iframe>
    </SpotifyEmbed>
  </Wrapper>
);

export default LeftOnMaple;
