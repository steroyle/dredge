export interface Fish {
  id: number;
  name: string;
  description: string;
  image: string;
  location: string;
  waterType: string;
  day: boolean;
  night: boolean;
  rod: boolean;
  trawl: boolean;
  pot: boolean;
  abberrations: number[];
  abberrationOfId?: number;
}

export const fishes: Fish[] = [
  {
    id: 1,
    name: 'Blue Mackerel',
    description: 'Practically worthless but enough to stave off hunger.',
    image: '',
    location: 'The Marrows',
    waterType: 'coastal',
    day: true,
    night: false,
    rod: true,
    trawl: true,
    pot: false,
    abberrations: [79, 80, 81]
  },
  {
    id: 2,
    name: 'Cod',
    description: 'Plentiful and basic.',
    image: '',
    location: 'The Marrows',
    waterType: 'coastal',
    day: true,
    night: false,
    rod: true,
    trawl: true,
    pot: false,
    abberrations: [82, 83, 84]
  },
  {
    id: 3,
    name: 'Arrow Squid',
    description: 'Rises from the depths at night to feed - or be fed upon.',
    image: '',
    location: 'The Marrows',
    waterType: 'coastal',
    day: false,
    night: true,
    rod: true,
    trawl: true,
    pot: false,
    abberrations: [85, 86]
  }
];

export interface WaterType {
  id: number;
  name: string;
  bgColor: string;
  color: string;
}

export const waterTypes: WaterType[] = [
  {
    id: 1,
    name: 'coastal',
    bgColor: '#3B357D',
    color: 'white'
  },
  {
    id: 2,
    name: 'shallow',
    bgColor: '#327F75',
    color: 'white'
  },
  {
    id: 3,
    name: 'oceanic',
    bgColor: '#16658C',
    color: 'white'
  },
  {
    id: 4,
    name: 'abyssal',
    bgColor: '#7B4084',
    color: 'white'
  },
  {
    id: 5,
    name: 'hadal',
    bgColor: '#812F3D',
    color: 'white'
  },
  {
    id: 6,
    name: 'volcanic',
    bgColor: '#B12F22',
    color: 'white'
  },
  {
    id: 7,
    name: 'mangrove',
    bgColor: '#84662A',
    color: 'white'
  },
  {
    id: 8,
    name: 'crab',
    bgColor: '#A58961',
    color: 'white'
  },
  {
    id: 9,
    name: 'ice',
    bgColor: '#BDFFF7',
    color: 'black'
  }
];
