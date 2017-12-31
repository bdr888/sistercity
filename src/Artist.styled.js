import styled from 'styled-components';

const Wrapper = styled.div`
  width: 1000px;
`;

const Title = styled.div`
  font-size: 30px;
  border-bottom: 5px solid black;
  margin: 1rem auto;
  text-align: left;
`;

const Image = styled.img`
  margin: 1rem auto;
`;

const Lineup = styled.div`
  font-size: 14px;
  text-align: left;
`;

const Description = styled.div`
  font-size: 14px;
  text-align: left;
  margin: 1rem auto;
`;

const Releases = styled.div`
  font-size: 20px;
  text-align: left;
  margin: 1rem auto;
  border-bottom: 5px solid black;
`;

const SpotifyEmbed = styled.div`
  margin: 1rem auto;
  text-align: left;
`;

const Record = styled.div`
  text-align: left;
`;

export {
  Description,
  Image,
  Lineup,
  SpotifyEmbed,
  Title,
  Record,
  Releases,
  Wrapper,
};
