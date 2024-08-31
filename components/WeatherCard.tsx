// src/components/Card.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { format } from 'date-fns';

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
  console.log(date);
  return (
    <View style={styles.card}>
      {imageUrl && <Image source={{ uri: imageUrl }} style={styles.cardImage} />}
      <Text >{description}</Text>
      <View style={styles.cardContent}>

        <Text style={styles.cardTitle}>{city}</Text>
        <Text style={styles.cardTitle}>{Math.round(temp)}°</Text>
        {/* <Text style={styles.cardContent}>{dt}</Text> */}
        <Text style={[styles.cardContent]}>{convertTimestampToReadableDate(dt).toLocaleDateString('en-US', { weekday: 'short' })}</Text>
        <Text style={styles.cardContent}> {formatDay(date)} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#b5b5b5',
    width: 300,
    height: 300,
    alignItems: 'center',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginVertical: 10,
    marginHorizontal: 15,
    overflow: 'hidden',
  },
  cardImage: {
    width: '10%',
    height: 10,
  },
  cardContent: {
    padding: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#555',
  },
});

export default WeatherCard;
