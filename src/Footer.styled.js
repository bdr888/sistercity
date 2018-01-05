import styled from 'styled-components';

const Footer = styled.div`
  font-family: 'Catamaran', sans-serif;
  font-size: 1rem;
  margin: 1rem auto;
  text-align: center;
  color: black;
`;

// @todo fix positioning hackiness
const Illustrations = styled.div`
  position: absolute;
  bottom: 3rem;
  right: 4rem;
  font-family: 'Catamaran', sans-serif;
  font-size: .9rem;
`;

const Subtitle = styled.div`

`;

export {
  Illustrations,
  Footer,
  Subtitle,
};

