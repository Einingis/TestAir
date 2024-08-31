import React from 'react';
import { View, Text, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

import { styles } from '../styles/MainStyles';
import { getWeatherIconUrl } from '../utils/FetchData';
import WeatherCard from '../components/WeatherCard';

type WeatherScreenProps = NativeStackScreenProps<RootStackParamList, 'Weather'>;

const WeatherScreen = ({ route }: WeatherScreenProps) => {
  const { weatherData } = route.params;

  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Weather Screen</Text>
      <Text style={styles.text}>Weather: {weatherData.weather[0].description}</Text>
      <Image
        source={{ uri: getWeatherIconUrl(weatherData.weather[0].icon) }}
        style={{ width: 100, height: 100 }}
      />
      <Text style={styles.text}>Temperature: {weatherData.main.temp}°C</Text>
      <Text style={styles.text}>City: {weatherData.name}</Text>
      <Text style={styles.text}>date: {weatherData.dt}</Text> */}
      <WeatherCard
        city={weatherData.name}
        description={weatherData.weather[0].description}
        temp={weatherData.main.temp}
        dt={weatherData.dt}
        imageUrl={getWeatherIconUrl(weatherData.weather[0].icon)}
      />
    </View>

  );
};

export default WeatherScreen;
