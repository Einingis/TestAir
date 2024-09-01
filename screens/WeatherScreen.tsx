import React from 'react';
import { View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

import { getWeatherIconUrl } from '../utils/FetchData';
import WeatherCard from '../components/WeatherCard';
import { weatherStyles } from '../styles/WeatherCardStyles';

type WeatherScreenProps = NativeStackScreenProps<RootStackParamList, 'Weather'>;

const WeatherScreen = ({ route }: WeatherScreenProps) => {
  const { weatherData } = route.params;

  return (
    <View style={weatherStyles.container}>
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
