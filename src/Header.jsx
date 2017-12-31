import React from 'react';
// import { Link } from 'react-router-dom';
import { Wrapper, Icon, Title, MyLink } from './Header.styled';
import sombrero from './sombrero.png';

const Header = () => (
  <Wrapper>
    {/* <Link to={"/home"}>
      <Icon src={sombrero}/>
    </Link> */}
    <MyLink to={"/home"}>
      <Title>Sombrero Records</Title>
    </MyLink>
  </Wrapper>
);

export default Header;
