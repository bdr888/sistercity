import React from 'react';
import { Wrapper, Title, Image, Description } from './Artist.styled';

const Artist = (props) => (
  <Wrapper>
    <Title>
      {props.children}
    </Title>
    <Image />
    <Description />
  </Wrapper>
);

export default Artist;
