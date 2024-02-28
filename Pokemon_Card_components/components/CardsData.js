const CardsData = [
  {
    id: 1,
    name: 'Charmender',
    image: require('../assets/charmander.png'),
    type: 'Fire',
    hp: 39,
    moves: ['Scratch', 'Ember', 'Growl', 'Leer'],
    weaknesses: ['Water', 'Rock'],
  },
  {
    id: 2,
    name: 'Squirtle',
    image: require('../assets/squirtle.png'),
    type: 'Water',
    hp: 44,
    moves: ['Tackle', 'Water Gun', 'Tail whip', 'Withdraw'],
    weaknesses: ['Electric', 'Grass'],
  },
  {
    id: 3,
    name: 'Bulbasaur',
    image: require('../assets/bulbasaur.png'),
    type: 'Grass',
    hp: 45,
    moves: ['Tackle', 'Vine whip', 'Growl', 'Leech Seed'],
    weaknesses: ['Fire', 'ICE'],
  },
  {
    id: 4,
    name: 'Pikachu',
    image: require('../assets/pikachu.png'),
    type: 'Electric',
    hp: 35,
    moves: ['Scratch', 'Ember', 'Growl', 'Leer'],
    weaknesses: ['Ground'],
  },
];
export default CardsData;
