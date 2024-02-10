export interface Fish {
  id: number;
  name: string;
  description: string;
  image: string;
  location: string;
  type: string;
  day: boolean;
  night: boolean;
  rod: boolean;
  trawl: boolean;
  pot: boolean;
  abberrations: number[];
}

export const fishes: Fish[] = [
  {
    id: 1,
    name: 'Blue Mackerel',
    description: 'Practically worthless but enough to stave off hunger.',
    image: '',
    location: 'The Marrows',
    type: 'Coastal',
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
    type: 'Coastal',
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
    type: 'Coastal',
    day: false,
    night: true,
    rod: true,
    trawl: true,
    pot: false,
    abberrations: [85, 86]
  }
];
