const drinkMap = {
  'maple syrup': {
    'color': '#BD5E00',
  },
  'blue curacao': {
    'color': '#0073F7',
  },
  'bourbon': {
    'color': '#A18950',
    'pattern': 'stripes',
    'patternColor': '#000000',
  },
  'whiskey': {
    'color': '#CCB47C',
    'pattern': 'stripes',
    'patternColor': '#000000',
  },
  'brandy': {
    'color': '#968432',
    'pattern': 'stripes',
    'patternColor': '#CCC08D',
  },
  'rum': {
    'color': '#D6C163',
  },
  'creme de menthe': {
    'color': '#DFF7D5',
  },
  'creme de cacao': {
    'color': '#D6C47A',
  },
  'kahlua': {
    'color': '#AD7F42',
  },
  'tequila': {
    'color': '#E6FAE6',
  },
  'gin': {
    'color': '#F7F5B5',
  },
  'vodka': {
    'color': '#DEF9FF',
  },
  'cola': {
    'color': '#B5A276',
    'pattern': 'dots',
    'patternColor': '#E0D8C5',
  },
  'sprite': {
    'color': '#F7FAAF',
    'pattern': 'dots',
    'patternColor': '#ffffff',
  },
  'champagne': {
    'color': '#F2E896',
    'pattern': 'dots',
    'patternColor': '#ffffff',
  },
  'iced tea': {
    'color': '#E3BA3D',
  },
  'cherry juice': {
    'color': '#9C4343',
  },
  'cranberry juice': {
    'color': '#BD2828',
  },
  'ginger ale': {
    'color': '#DEC357',
    'pattern': 'dots',
    'patternColor': '#ffffff',
  },
  'lime juice': {
    'color': '#9FF27E',
  },
  'lemon juice': {
    'color': '#F5F5B3',
  },
  'tomato juice': {
    'color': '#D66413',
  },
  'pineapple juice': {
    'color': '#F2ED4E',
  },
  'orange juice': {
    'color': '#F5C451',
  },
  'tonic water': {
    'color': '#F2F1CE',
    'pattern': 'dots',
    'patternColor': '#ffffff',
  },
  'water': {
    'color': '#EDF7F6',
    'pattern': 'stripes',
    'patternColor': '#ffffff',
  },
  'milk': {
    'color': '#ffffff',
  },
  'cream': {
    'color': '#FAFAE3',
    'pattern': 'stripes',
    'patternColor': '#ffffff',
  },
  'sweet and sour mix': {
    'color': '#EDF5C4',
    'pattern': 'dots',
    'patternColor': '#FFFC4D',
  },
  'hard cider': {
    'color': '#DBC51F',
    'pattern': 'dots',
    'patternColor': '#F2E052',
  },
  'fireball': {
    'color': '#EBAF0C',
  },
  "peach schnapps": {
    'color': '#EBB65B',
  },
  "grenadine": {
    'color': '#D67E7E',
  },
  "bitters": {
    'color': '#C2BA99',
    'pattern': 'dots',
    'patternColor': '#FFFFFF',
  },
  "simple syrup": {
    'color': '#F5F3E4',
  }
};

const glassTypeSizeMap = {
  "highball": [250, 150],
  "lowball": [120, 150],
  "martini": [80, 150],
  "champagne": [180, 80],
};

const firstWords = [
  'Adorable',
  'Adventurous',
  'Beautiful',
  'Better',
  'Big',
  'Brave',
  'Calm',
  'Cheerful',
  'Clean',
  'Clear',
  'Clever',
  'Clumsy',
  'Creative',
  'Cute',
  'Dirty',
  'Elegant',
  'Faint',
  'Famous',
  'Flat',
  'Friendly',
  'Funny',
  'Handsome',
  'Happy',
  'Helpful',
  'High',
  'Hollow',
  'Honest',
  'Huge',
  'Immense',
  'Jolly',
  'Kind',
  'Little',
  'Loud',
  'Massive',
  'Mysterious',
  'Narrow',
  'Nervous',
  'Nice',
  'Noisy',
  'Old',
  'Plain',
  'Pretty',
  'Proud',
  'Quiet',
  'Raspy',
  'Round',
  'Short',
  'Silly',
  'Small',
  'Square',
  'Tall',
  'Tiny ',
  'Wide',
  'Wrong',
  'Young',
  'Bleached',
  'Bold',
  'Brash',
  'Bright',
  'Chintzy',
  'Clean',
  'Cold',
  'Colored',
  'Colorful',
  'Colorless',
  'Cool',
  'Dappled',
  'Dark',
  'Deep',
  'Delicate',
  'Discolored',
  'Dusty',
  'Fast',
  'Festive',
  'Fiery',
  'Flamboyant',
  'Flaming',
  'Fluorescent',
  'Fresh',
  'Old-Glowing',
  'Harmonious',
  'Harsh',
  'Iridescent',
  'Jazzy',
  'Light',
  'Loud',
  'Matching',
  'Medium',
  'Mellow',
  'Monochrome',
  'Monotone',
  'Multicolored',
  'Muted',
  'Neutral',
  'Opalescent',
  'Pastel',
  'Psychedelic',
  'Pure',
  'Restrained',
  'Rich',
  'Sepia',
  'Showy',
  'Sickly',
  'Sober',
  'Soft',
  'Somber',
  'Sombre',
  'Splashy',
  'Tinged',
  'Tinted',
  'Tonal',
  'Translucent',
  'Two-Tone',
  'Vibrant',
  'Violent',
  'Vivid',
  'Warm',
  'Washed-Out',
];

const secondWords = [
  'Abhorson',
  'Achilles',
  'Aegeon',
  'Aeneas',
  'Agamemnon',
  'Agrippa',
  'Ajax',
  'Antiochus',
  'Antonio',
  'Balthazar',
  'Banquo',
  'Bates',
  'Benvolio',
  'Bottom',
  'Butts',
  'Caliban',
  'Capulet',
  'Cicero',
  'Cobweb',
  'Court',
  'Cromwell',
  'Cupid',
  'Curio',
  'Cymbeline',
  'Demetrius',
  'Dogberry',
  'Elbow',
  'Ford',
  'Froth',
  'Griffith',
  'Hamlet',
  'Horatio',
  'Lancelot',
  'Macbeth',
  'Malvolio',
  'Mercutio',
  'Montague',
  'Moth',
  'Mustardseed',
  'Oberon',
  'Paris',
  'Peaseblossom',
  'Pedro',
  'Pinch',
  'Pistol',
  'Polonius',
  'Quince',
  'Rugby',
  'Sampson',
  'Sebastian',
  'Shallow',
  'Simple',
  'Slender',
  'Snout',
  'Snug',
  'Speed',
  'Taurus',
  'Valentine',
  'Bianca',
  'Ceres',
  'Cleopatra',
  'Cordelia',
  'Desdemona',
  'Hero',
  'Imogen',
  'Juliet',
  'Juno',
  'Mopsa',
  'Patience',
  'Quickly',
  'Ursula',
  'Factory Reset Button',
  'Blood Rage',
  'Idiot',
  'Toaster',
  'Legend',
  'Death Wish',
  'Psychic',
  'Knife',
  'Hunting Ground',
  'Lettuce',
  'Kitty',
  'Coffee Pot',
  'Sound Barrier',
  'Stock Car',
  'Telephone',
  'Newt',
  'Karate',
  'Pistol',
  'Double Fault',
  'Kittycat',
  'Cottage',
  'Oxygen',
  'Laser',
  'Messiness',
  'Volcano',
  'Furnace',
  'Criminal',
  'Machete',
  'Dragon',
  'Patrolman',
  'Graveyard',
  'Billionaire',
  'Albany',
  'Annapolis',
  'Atlanta',
  'Augusta',
  'Austin',
  'Baton Rouge',
  'Bismarck',
  'Boise',
  'Boston',
  'Carson City',
  'Charleston',
  'Cheyenne',
  'Columbia',
  'Columbus',
  'Concord',
  'Denver',
  'Des Moines',
  'Dover',
  'Frankfort',
  'Harrisburg',
  'Hartford',
  'Helena',
  'Honolulu',
  'Indianapolis',
  'Jackson',
  'Jefferson City',
  'Juneau',
  'Lansing',
  'Lincoln',
  'Little Rock',
  'Madison',
  'Montgomery',
  'Montpelier',
  'Nashville',
  'Oklahoma City',
  'Olympia',
  'Phoenix',
  'Pierre',
  'Providence',
  'Raleigh',
  'Richmond',
  'Sacramento',
  'Saint Paul',
  'Salem',
  'Salt Lake City',
  'Santa Fe',
  'Springfield',
  'Tallahassee',
  'Topeka',
  'Trenton',
];
