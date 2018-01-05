import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import sombrero from './assets/sombrero.png';

const Footer = styled.div`
  margin-top: 1rem;
  border-top: 5px solid black;
`;

const Sombrero = styled.img`
  margin: 2rem auto;
  width: 60px;
`;

const FooterNav = () => (
  <Footer>
    <Link to="/">
      <Sombrero src={sombrero} alt="say-ar-marmalan" />
    </Link>
  </Footer>
);

export default FooterNav;
