import React from 'react';
import Profile from './Profile';
import Releases from './Releases';
import Data from './data';

const Bands = Data.bands;

const Artist = () => (
  <div>
    <Profile
      bandName={Bands[0].name}
      description={Bands[0].description}
      image={Bands[0].heroImage}
    />
    <Releases
      albumArtist={Bands[0].albums.albumArtist}
      albumDetails={Bands[0].albums.albumDetails}
      albumImage={Bands[0].albums.albumImage}
      albumTitle={Bands[0].albums.albumTitle}
      spotifyEmbed={Bands[0].albums.spotifyEmbed}
    />
  </div>
);

export default Artist;
