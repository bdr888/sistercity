import crowd from './assets/crowd.png';
import hundredsOfThem from './assets/hundredsofthem.jpg';
import maple from './assets/maple.png';
import creamer from './assets/creamer.jpg';
import cards from './assets/cards.jpg';
import camera from './assets/camera.png';
import artist from './assets/artist.png';

const Data = {
  bands: [
    { name: '3 Card Monty',
      description: 'ska lives!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
      url: '/3CardMonty',
      heroImage: cards,
      members: [
        { name: 'Josh Morris', instrument: 'Guitar/Keyboard' },
        { name: 'Eric Binkley', instrument: 'Bass/Vocals' },
        { name: 'Brian Ridge', instrument: 'Drums/Percussion' },
      ],
      albums: {
        albumArtist: 'Left On Maple',
        albumDetails: '2003 (SR-2)',
        albumImage: cards,
        albumTitle: 'A Friend Of a Friend',
        spotifyEmbed: 'https://open.spotify.com/embed?uri=spotify:user:etsitramai:playlist:0CJzBeJcS8d0wv5PP9tWhp&theme=white',
      },
    },
    { name: 'Cream/You Please',
      description: 'musicccccc muscicccclskdjflsdjfosijflskdjf',
      url: '/CreamYouPlease',
      heroImage: creamer,
      albums: {
        albumArtist: 'Cream/You Please',
        albumDetails: '2007 (SR-5)',
        albumImage: creamer,
        albumTitle: 'demos',
        spotifyEmbed: 'https://open.spotify.com/embed?uri=spotify:user:etsitramai:playlist:2Ivx5613dY4KuPV8ZNroqj&theme=white',
      },
    },
    { name: 'Hundreds of Them',
      description: 'Hundreds of Them played boring art post rock punk music. They spent more time philospophizing about the sympathetic vibrations of their imagined triumviratee than playing music, which is not very punk rock. They first practiced at 645 Arapahoe in a basement with a dirt floor. Then they took residence in those halcyon days ggat 2005 Upland, The Chicken Coop.',
      url: '/HundredsOfThem',
      heroImage: crowd,
      albums: {
        albumArtist: 'Hundeds of Them',
        albumDetails: '2009 (SR-6)',
        albumImage: hundredsOfThem,
        albumTitle: 'Thank You',
        spotifyEmbed: 'https://open.spotify.com/embed?uri=spotify:user:etsitramai:playlist:5HSbBVPN8N7JmJiWYgsKfm&theme=white',
      },
    },
    { name: 'iamartiste',
      description: 'emo lives!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
      url: '/iamartiste',
      heroImage: artist,
      albums: {
        albumArtist: 'iamartiste',
        albumDetails: '2004 (SR-1)',
        albumImage: artist,
        albumTitle: 'demos',
        spotifyEmbed: 'https://open.spotify.com/embed?uri= spotify:user:etsitramai:playlist:260OUszYoCu5ZgCISZttyY',
      },
    },
    { name: 'Left On Maple',
      description: 'Left on maple!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
      url: '/LeftOnMaple',
      heroImage: maple,
      albums: {
        albumArtist: 'Left On Maple',
        albumDetails: '2003 (SR-1)',
        albumImage: { maple },
        albumTitle: 'S/T',
        spotifyEmbed: 'https://open.spotify.com/embed?uri=spotify:user:etsitramai:playlist:2HGva4RcoB5CTvGE1TjArX&theme=white',
      },
    },
    { name: 'Smile For My Camera',
      description: 'indie dance pop lives!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
      url: '/SmileForMyCamera',
      heroImage: camera,
      albums: {
        albumArtist: 'Smile For My Camera',
        albumDetails: '2003 (SR-4)',
        albumImage: camera,
        albumTitle: 'demos',
        spotifyEmbed: 'https://open.spotify.com/embed?uri=spotify:user:etsitramai:playlist:0asyIlnbulq74L6uCD4Rn5&theme=white',
      },
    },
  ],
  get(id) {
    const isBand = b => b.name === id;
    return this.bands.find(isBand);
  },
};

export default Data;

