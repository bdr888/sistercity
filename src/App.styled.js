import styled from 'styled-components';

const Wrapper = styled.div`
`;

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  /* justify-content: center; */
  /* align-items: center; */
  /* text-align: center; */
`;

const Body = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 1000px;
`;

const Header = styled.div`
  text-align: left;
  height: 30px;
  padding: 20px;
  background-color: black;
  color: white;
  font-family: 'Comfortaa', cursive;
`;

const Title = styled.div`
  font-size: 1.5em;
`;

const Intro = styled.p`
  font-size: large;
`;

export {
  AppWrapper,
  Body,
  Header,
  Intro,
  Title,
  Wrapper,
};
