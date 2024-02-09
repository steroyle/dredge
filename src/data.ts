interface fish {
  id: number;
  name: string;
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

export const fishes: fish[] = [
  {
    id: 1,
    name: 'Blue Mackerel',
    image:
      'https://static.wikia.nocookie.net/dredge/images/2/26/Blue_Mackerel.png/revision/latest/scale-to-width-down/150',
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
    image:
      'https://static.wikia.nocookie.net/dredge/images/4/41/Cod.png/revision/latest/scale-to-width-down/150',
    location: 'The Marrows',
    type: 'Coastal',
    day: true,
    night: false,
    rod: true,
    trawl: true,
    pot: false,
    abberrations: [82, 83, 84]
  }
];
