import styled from 'styled-components';

const HomeWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  @media (min-width: 440px) {
    flex-flow: row wrap;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: flex-end;

  @media (min-width: 440px) {
    flex-flow: row wrap;
  }
`;

export {
  CardWrapper,
  HomeWrapper,
};

