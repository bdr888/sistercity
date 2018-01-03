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
// import Data from './data';

// const Members = Data.bands[0].members;
// console.log(Members);

// @todo make getLinup function - HOC?

const Profile = props => (
  <Wrapper>
    <Info>
      <Image src={props.image} />
      <BandName>{props.bandName}</BandName>
      <Lineup>
        {/* {Data.map(member => (
          <div>{member.instrument} - {member.name}</div>
        ))} */}
        <div>Brian Ridge</div>
        <div>Brian Ridge</div>
        <div>Brian Ridge</div>
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
