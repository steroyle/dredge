import {WaterType, waterTypes} from '../data';

const waterTypesMap: {[key: string]: WaterType} = waterTypes.reduce((acc, waterType) => {
  acc[waterType.name] = waterType;
  return acc;
}, {} as {[key: string]: WaterType});

export default function useWaterType() {
  const getWaterTypeInfo = (waterType: string): WaterType | undefined => {
    return waterTypesMap[waterType];
  };

  return {
    getWaterTypeInfo
  };
}
