import styled from 'styled-components';

const Wrapper = styled.div`
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const Title = styled.div`
  font-size: 30px;
  border-bottom: 5px solid black;
  margin-bottom: 10px;
`;

const Image = styled.div`
  border: 1px solid black;
  height: 300px;
  width: 400px;
`;

const Description = styled.span`
  font-size: 20px;
  width: 400px;
  text-align: left;g
`;

const SpotifyEmbed = styled.div`
  margin: 2rem auto;
`;

export {
  ContentWrapper,
  Description,
  Image,
  SpotifyEmbed,
  Title,
  Wrapper,
};
