import React from 'react';
import { Wrapper, MyLink, Sombrero } from './Header.styled';
import sombrero from './assets/SombreroTitle.png';

// @todo make header smaller on artist page
// @todo

const Header = () => (
  <Wrapper>
    <MyLink to={'/'}>
      <Sombrero alt="home" src={sombrero} />
    </MyLink>
  </Wrapper>
);

export default Header;

/* <Title>Sombrero Records</Title> */
