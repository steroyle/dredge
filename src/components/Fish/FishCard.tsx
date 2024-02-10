import {Fish} from '../../data';
import useWaterType from '../../hooks/useWaterType';

interface FishCardProps {
  fish: Fish;
}

export default function FishCard({fish}: FishCardProps) {
  const {getWaterTypeInfo} = useWaterType();
  const waterTypeInfo = getWaterTypeInfo(fish.waterType);

  return (
    <div className="fish-card">
      <h2>{`#${fish.id} ${fish.name}`}</h2>
      <p>{fish.description}</p>
      <p style={{background: waterTypeInfo?.bgColor, color: waterTypeInfo?.color}}>
        {fish.waterType}
      </p>
    </div>
  );
}
