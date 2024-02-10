import {Box, Text} from '@mantine/core';
import {Fish} from '../../data';
import useWaterType from '../../hooks/useWaterType';
import styles from './FishCard.module.css';

interface FishCardProps {
  fish: Fish;
}

export default function FishCard({fish}: FishCardProps) {
  const {getWaterTypeInfo} = useWaterType();
  const waterTypeInfo = getWaterTypeInfo(fish.waterType);

  return (
    <Box className={styles.card}>
      <h2>{`#${fish.id} ${fish.name}`}</h2>

      <Box bg={waterTypeInfo?.bgColor} c={waterTypeInfo?.color} p={20}>
        <Text tt="uppercase" fw="bold" fz={20}>
          {fish.waterType}
        </Text>
        <Text>{fish.description}</Text>
      </Box>
    </Box>
  );
}
