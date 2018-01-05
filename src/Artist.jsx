import React from 'react';
// import { string, node } from 'prop-types';
import Profile from './Profile';
import Releases from './Releases';

const Artist = props => (
  <div>
    <Profile
      bandName={props.artist.name}
      description={props.artist.description}
      image={props.artist.heroImage}
      members={props.artist.members}
    />
    <Releases
      albumArtist={props.artist.albums.albumArtist}
      albumDetails={props.artist.albums.albumDetails}
      albumImage={props.artist.albums.albumImage}
      albumTitle={props.artist.albums.albumTitle}
      spotifyEmbed={props.artist.albums.spotifyEmbed}
    />
    <FooterNav />
  </ArtistWrapper>
);

export default Artist;
