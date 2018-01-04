import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 440px){
    
  }
`;

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: 'Catamaran', sans-serif;
`;

export {
  AppWrapper,
  Wrapper,
};
