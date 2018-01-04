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
      description: 'Lorem ipsum dolor amet snackwave tote bag godard XOXO wolf brunch gastropub church-key irony plaid hot chicken mumblecore dreamcatcher tumblr. VHS truffaut twee, franzen pok pok mustache adaptogen. Bushwick shoreditch tacos slow-carb blog freegan wayfarers locavore irony art party listicle cardigan kogi bicycle rights viral. Portland copper mug aesthetic, austin try-hard yuccie vape squid snackwave fanny pack authentic. Cloud bread salvia quinoa tbh direct trade. Austin brooklyn pug, salvia organic microdosing jean shorts wayfarers tousled aesthetic humblebrag street art enamel pin. Cronut intelligentsia ennui vice 3 wolf moon. Readymade salvia shaman fingerstache, chicharrones keytar everyday carry photo booth actually bushwick activated charcoal mixtape thundercats. Gochujang banjo vaporware PBR&B, af selvage church-key aesthetic sriracha put a bird on it kombucha copper mug photo booth fixie. Chillwave cornhole DIY put a bird on it.',
      url: '3CardMonty',
      heroImage: cards,
      members: [
        { name: 'Craig Beloo', instrument: 'Vocals' },
        { name: 'George Davies', instrument: 'Guitar' },
        { name: 'Jorge???', instrument: 'Trombone' },
        { name: '???', instrument: 'Soprano Saxophone' },
        { name: '???', instrument: 'Trumpet' },
        { name: 'Drew ???', instrument: 'Bass' },
        { name: 'Kyle Pattridge', instrument: 'Drums/Percussion' },
      ],
      albums: {
        albumArtist: '3 Card Monty',
        albumDetails: '2003 (SR-2)',
        albumImage: cards,
        albumTitle: 'A Friend Of a Friend',
        spotifyEmbed: 'https://open.spotify.com/embed?uri=spotify:user:etsitramai:playlist:0CJzBeJcS8d0wv5PP9tWhp&theme=white',
      },
    },
    { name: 'Cream/You Please',
      description: 'musicccccc muscicccclskdjflsdjfosijflskdjf',
      url: 'CreamYouPlease',
      heroImage: creamer,
      members: [
        { name: 'Josh Morris', instrument: 'Guitar' },
        { name: 'Brett Lewan', instrument: 'Bass/Vocals' },
        { name: 'Brian Ridge', instrument: 'Drums/Percussion' },
      ],
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
      url: 'HundredsOfThem',
      heroImage: crowd,
      members: [
        { name: 'Josh Morris', instrument: 'Guitar/Keyboard' },
        { name: 'Eric Binkley', instrument: 'Bass/Vocals' },
        { name: 'Brian Ridge', instrument: 'Drums/Percussion' },
      ],
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
      url: 'iamartiste',
      heroImage: artist,
      members: [
        { name: 'Brett Lewan', instrument: 'Guitar/Vocals' },
        { name: 'Josh Morris', instrument: 'Guitar/Keyboard' },
        { name: 'Jake Hansen', instrument: 'Bass/Vocals' },
        { name: 'Brian Ridge', instrument: 'Drums/Percussion' },
      ],
      albums: {
        albumArtist: 'iamartiste',
        albumDetails: '2004 (SR-1)',
        albumImage: artist,
        albumTitle: 'demos',
        spotifyEmbed: 'https://open.spotify.com/embed?uri=spotify:user:etsitramai:playlist:260OUszYoCu5ZgCISZttyY&theme=white',
      },
    },
    { name: 'Left On Maple',
      description: 'Left on maple!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
      url: 'LeftOnMaple',
      heroImage: maple,
      members: [
        { name: 'Brett Lewan', instrument: 'Guitar/Vocals' },
        { name: '???', instrument: 'Guitar/Keyboard' },
        { name: 'Zach Flower', instrument: 'Bass' },
        { name: 'Jared Temanson', instrument: 'Drums' },
      ],
      albums: {
        albumArtist: 'Left On Maple',
        albumDetails: '2003 (SR-1)',
        albumImage: maple,
        albumTitle: 'S/T',
        spotifyEmbed: 'https://open.spotify.com/embed?uri=spotify:user:etsitramai:playlist:2HGva4RcoB5CTvGE1TjArX&theme=white',
      },
    },
    { name: 'Smile For My Camera',
      description: 'indie dance pop lives!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
      url: 'SmileForMyCamera',
      heroImage: camera,
      members: [
        { name: 'Jason Joyce', instrument: 'Vocals' },
        { name: 'Josh Morris', instrument: 'Guitar' },
        { name: 'Brett Lewan', instrument: 'Keyboard' },
        { name: 'Devin ???', instrument: 'Drums' },
      ],
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

