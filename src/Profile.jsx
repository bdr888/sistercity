import React from 'react';
import { string, node } from 'prop-types';
import {
  Description,
  Image,
  Lineup,
  Info,
  Wrapper,
  BandName,
} from './Profile.styled';

// @todo make getLinup function - HOC?

const Profile = props => (
  <Wrapper>
    <Info>
      <Image src={props.image} />
      <BandName>{props.bandName}</BandName>
      <Lineup>
        <div>Guitar/Keyboard - Josh Morris</div>
        <div>Bass/Vocals - Eric Binkley</div>
        <div>Drums/Percussion - Brian Ridge</div>
      </Lineup>
    </Info>
    <Description>{ props.description }</Description>
  </Wrapper>
);

Profile.propTypes = {
  bandName: string.isRequired,
  description: string.isRequired,
  image: node.isRequired,
  // lineup: node.isRequired,
};

export default Profile;
