import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

import { styles } from '../styles';

type WeatherScreenProps = NativeStackScreenProps<RootStackParamList, 'Weather'>;

const WeatherScreen = ({ route }: WeatherScreenProps) => {
  const { weatherData } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Weather Screen</Text>
      <Text style={styles.text}>City: {weatherData.name}</Text>
      <Text style={styles.text}>Temperature: {weatherData.main.temp}°C</Text>
      <Text style={styles.text}>Weather: {weatherData.weather[0].description}</Text>
    </View>
  );
};

export default WeatherScreen;
