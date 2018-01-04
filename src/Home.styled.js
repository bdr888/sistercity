import styled from 'styled-components';

const CardWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: flex-end;

  @media (min-width: 440px) {
    flex-flow: row wrap;
  }
`;

const HomeWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  @media (min-width: 440px) {
    flex-flow: row wrap;
    height: 60vh;
  }
`;

export {
  CardWrapper,
  HomeWrapper,
};

