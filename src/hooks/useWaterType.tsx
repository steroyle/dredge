import {waterTypes} from '../data';

export default function useWaterType() {
  const getWaterTypeColor = (waterType: string): string => {
    const item = waterTypes.find((item) => item.name === waterType);
    return item ? item.color : ''; // Return the color if the item is found, else return an empty string
  };

  return {
    getWaterTypeColor
  };
}
