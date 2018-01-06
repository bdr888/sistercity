import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2.5rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;

const Image = styled.img`
  margin: 1rem auto;
  max-width: 300px;
`;

const Lineup = styled.div`
  font-size: 1rem;
  text-align: center;
`;

const Description = styled.div`
  font-size: 1rem;
  text-align: left;
  margin: 1rem;
  max-width: 600px;
`;

const Headline = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 1px;
`;

const Story = styled.div`
  font-size: 1rem;
  text-align: left;
  margin: 1rem;
`;

export {
  Description,
  Headline,
  Image,
  Lineup,
  Wrapper,
  Info,
  Story,
};
