import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ReleaseTitle = styled.div`
  font-size: 20px;
  text-align: center;
  margin: 2rem auto;
  border-bottom: 5px solid black;
`;

const SpotifyEmbed = styled.div`
  margin: 1rem auto;
  text-align: left;
`;

const Record = styled.div`
`;

const RecordArt = styled.img`
  width: 500px;
`;

const RecordTitle = styled.div`

`;

const RecordArtist = styled.div`
`;

const RecordDetails = styled.div`
`;

export {
  Record,
  RecordArt,
  RecordTitle,
  RecordArtist,
  RecordDetails,
  Wrapper,
  ReleaseTitle,
  SpotifyEmbed,
};
