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

interface WaterType {
  id: number;
  name: string;
  color: string;
}

export const waterTypes: WaterType[] = [
  {
    id: 1,
    name: 'coastal',
    color: '#3C3579'
  },
  {
    id: 2,
    name: 'shallow',
    color: '#327F75'
  },
  {
    id: 3,
    name: 'oceanic',
    color: '#16658C'
  },
  {
    id: 4,
    name: 'abyssal',
    color: '#7B4084'
  },
  {
    id: 5,
    name: 'hadal',
    color: '#812F3D'
  },
  {
    id: 6,
    name: 'volcanic',
    color: '#B12F22'
  },
  {
    id: 7,
    name: 'mangrove',
    color: '#84662A'
  }
];
