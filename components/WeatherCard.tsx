// src/components/Card.tsx
import React from 'react';
import { View, Text, Image } from 'react-native';
import { format } from 'date-fns';

import { weatherStyles } from '../styles/WeatherCardStyles';

type CardProps = {
  city: string;
  description: string;
  temp: number;
  dt: number;
  imageUrl?: string;

};

const WeatherCard: React.FC<CardProps> = ({ city, description, temp, dt, imageUrl }) => {

  const formatDay = (date: Date) => {
    return format(date, 'd');
  };

  const convertTimestampToReadableDate = (timestamp: number): Date => {
    const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
    return date;
  };

  const date = convertTimestampToReadableDate(dt);
  return (
    <View style={weatherStyles.card}>
      <View style={weatherStyles.weatherContainer}>
        {imageUrl && <Image source={{ uri: imageUrl }} style={weatherStyles.cardImage} />}
        <Text style={weatherStyles.description}>{description}</Text>
      </View>
      <Text style={weatherStyles.cardTitle}>{Math.round(temp)}°</Text>
      <View style={weatherStyles.bottom}>
        <Text style={weatherStyles.city}>{city}</Text>
        <View style={weatherStyles.date}>
          <Text style={[weatherStyles.cardContent]}>{convertTimestampToReadableDate(dt).toLocaleDateString('en-US', { weekday: 'short' })}</Text>
          <Text style={weatherStyles.cardContent}> {formatDay(date)} </Text>
        </View>
      </View>


    </View>
  );
};
export default WeatherCard;
