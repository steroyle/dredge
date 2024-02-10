interface FishGridProps {
  children: React.ReactNode;
}

export default function FishGrid({children}: FishGridProps) {
  return <div className="fish-grid">{children}</div>;
}
