import React from 'react';
import { string } from 'prop-types';
import {
  SpotifyEmbed,
  Record,
  RecordArt,
  RecordTitle,
  RecordArtist,
  RecordDetails,
  Wrapper,
  ReleaseTitle,
} from './Releases.styled';

const Releases = props => (
  <div>
    <ReleaseTitle>Releases</ReleaseTitle>
    <Wrapper>
      <Record>
        <RecordArt src={props.albumImage} />
        <RecordTitle>{props.albumTitle}</RecordTitle>
        <RecordArtist>{props.albumArtist}</RecordArtist>
        <RecordDetails>{props.albumDetails}</RecordDetails>
      </Record>
      <SpotifyEmbed>
        <iframe
          title="HoT-ThankYou"
          src={props.spotifyEmbed}
          width="400"
          height="500"
          frameBorder="0"
          allowTransparency="true"
        />
      </SpotifyEmbed>
    </Wrapper>
  </div>
);

Releases.propTypes = {
  albumArtist: string.isRequired,
  albumDetails: string.isRequired,
  albumImage: string.isRequired,
  albumTitle: string.isRequired,
  spotifyEmbed: string.isRequired,
};

export default Releases;
