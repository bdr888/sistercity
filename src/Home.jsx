import React, { Component } from 'react';
import { Wrapper, Title } from './Home.styled';
import BandCard from './Card';
import crowd from './assets/crowd.png';
import maple from './assets/maple.png';
import creamer from './assets/creamer.jpg';
import cards from './assets/cards.jpg';
import camera from './assets/camera.png';
import artist from './assets/artist.png';

// @todo move images and data to a database you idiot

class Home extends Component {
  static bands = [
    { name: '3 Card Monty', url: '/3CardMonty', heroImage: cards },
    { name: 'Cream/You Please', url: '/CreamYouPlease', heroImage: creamer },
    { name: 'Hundreds of Them', url: '/HundredsOfThem', heroImage: crowd },
    { name: 'iamartiste', url: '/iamartiste', heroImage: artist },
    { name: 'Left On Maple', url: '/LeftOnMaple', heroImage: maple },
    { name: 'Smile For My Camera', url: '/SmileForMyCamera', heroImage: camera },
  ];

  render() {
    return(
      <div>
        <Wrapper>
          {Home.bands.map(band => (
            <BandCard key={band.name} artist={band.url} image={band.heroImage}>{band.name}</BandCard>
          ))}
        </Wrapper>
        <Title>Punk rock music from Golden, CO.</Title>
      </div>

    )
  }
};

export default Home;
