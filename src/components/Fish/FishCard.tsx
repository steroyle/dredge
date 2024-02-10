import {Box, Flex, Text, Title} from '@mantine/core';
import {Fish} from '../../data';
import useWaterType from '../../hooks/useWaterType';
import classes from './FishCard.module.css';

interface FishCardProps {
  fish: Fish;
}

export default function FishCard({fish}: FishCardProps) {
  const {getWaterTypeInfo} = useWaterType();
  const waterTypeInfo = getWaterTypeInfo(fish.waterType);

  return (
    <Box className={classes.card}>
      <Title order={2} className={classes.title} mb={20}>{`#${fish.id} ${fish.name}`}</Title>

      <Flex className={classes.content}>
        <Title
          order={3}
          className={classes.type}
          bg={waterTypeInfo?.bgColor}
          c={waterTypeInfo?.color}
          fz={18}
        >
          {fish.waterType}
        </Title>
        <Text
          bg={waterTypeInfo?.bgColor}
          c={waterTypeInfo?.color}
          p={16}
          classNames={{root: classes.description}}
        >
          {fish.description}
        </Text>
      </Flex>
    </Box>
  );
}
