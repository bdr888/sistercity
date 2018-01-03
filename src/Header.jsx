import React from 'react';
import { Wrapper, Title, MyLink, Sombrero } from './Header.styled';
import sombrero from './assets/SombreroTitle.png';

const Header = () => (
  <Wrapper>
    <MyLink to={'/'}>
      {/* <Title>Sombrero Records</Title> */}
      <Sombrero alt="sd" src={sombrero} />
    </MyLink>
  </Wrapper>
);

export default Header;
