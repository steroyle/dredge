import {waterTypes} from '../data';

export default function WaterTypeList() {
  return waterTypes.map((waterType) => {
    return (
      <div
        style={{
          background: waterType.bgColor,
          color: waterType.color,
          textTransform: 'uppercase',
          padding: 15,
          fontWeight: 700
        }}
      >
        {waterType.name}
      </div>
    );
  });
}
