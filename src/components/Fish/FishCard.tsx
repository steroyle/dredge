import {Fish} from '../../data';
import useWaterType from '../../hooks/useWaterType';

interface FishCardProps {
  fish: Fish;
}

export default function FishCard({fish}: FishCardProps) {
  const {getWaterTypeColor} = useWaterType();
  const waterTypeColor = getWaterTypeColor(fish.waterType);

  return (
    <div className="fish-card">
      <h2>{`#${fish.id} ${fish.name}`}</h2>
      <p>{fish.description}</p>
      <p style={{background: waterTypeColor, color: 'white'}}>
        {getWaterTypeColor(fish.waterType)}
      </p>
    </div>
  );
}
