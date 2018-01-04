import React from 'react';
import { arrayOf, string, node, shape } from 'prop-types';
import {
  Description,
  Image,
  Lineup,
  Info,
  Wrapper,
  BandName,
} from './Profile.styled';

const Profile = props => (
  <Wrapper>
    <Info>
      <Image src={props.image} />
      <BandName>{props.bandName}</BandName>
      <Lineup>
        {props.members.map(member => (
          <div key={member.name}>
            {member.instrument} - {member.name}
          </div>
        ))}
      </Lineup>
    </Info>
    <Description>{ props.description }</Description>
  </Wrapper>
);

Profile.propTypes = {
  bandName: string.isRequired,
  description: string.isRequired,
  image: node.isRequired,
  members: arrayOf(shape({ name: string, instrument: string })).isRequired,
};

export default Profile;
