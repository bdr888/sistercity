import React from 'react';
import {
  Photos,
} from './Artist.styled';
import Profile from './Profile';
import Releases from './Releases';
import crowd from './assets/crowd.png';
import hundredsOfThem from './assets/hundredsofthem.jpg';
import data from './data';

// @todo spotify uri const

const Artist = props => (
  <div>
    <Profile
      bandName={data.bands.HundredsOfThem.name}
      description="Hundreds of Them played boring art post rock punk music. They spent more time philospophizing about the sympathetic vibrations of their imagined triumviratee than playing music, which is not very punk rock. They first practiced at 645 Arapahoe in a basement with a dirt floor. Then they took residence in those halcyon days ggat 2005 Upland, The Chicken Coop."
      image={crowd}
    />
    <Releases
      albumArtist="Hundeds of Them"
      albumDetails="2009 (SR-6)"
      albumImage={hundredsOfThem}
      albumTitle="Thank You"
      spotifyEmbed="https://open.spotify.com/embed?uri=spotify:user:etsitramai:playlist:5HSbBVPN8N7JmJiWYgsKfm&theme=white"
    />
    <Photos />
  </div>
);

export default Artist;
