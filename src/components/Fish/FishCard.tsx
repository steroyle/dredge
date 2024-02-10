import {Fish} from '../../data';

interface FishCardProps {
  fish: Fish;
}

export default function FishCard({fish}: FishCardProps) {
  return (
    <div className="fish-card">
      <h2>{`#${fish.id} ${fish.name}`}</h2>
      <p>{fish.description}</p>
    </div>
  );
}
