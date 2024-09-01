import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, ActivityIndicator, StyleSheet } from 'react-native';

import { getHistory } from '../utils/HistoryUtils';
import WeatherCard from '../components/WeatherCard';
import { fetchWeatherData, getWeatherIconUrl } from '../utils/FetchData';
import { weatherStyles } from '../styles/WeatherCardStyles';

const HistoryScreen = () => {
  const [history, setHistory] = useState<string[]>([]);
  const [weatherDataList, setWeatherDataList] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const storedHistory = await getHistory();
        setHistory(storedHistory);
      } catch (error) {
        console.error('Error fetching history:', error);
      }
    };

    fetchHistory();
  }, []);

  useEffect(() => {
    const fetchWeatherForHistory = async () => {
      if (history.length === 0) {
        setLoading(false);
        return;
      }

      try {
        const weatherPromises = history.map(city => fetchWeatherData(city));
        const weatherResults = await Promise.all(weatherPromises);
        setWeatherDataList(weatherResults);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherForHistory();
  }, [history]);

  const renderWeatherCard = (weatherData: any) => {
    return (
      <WeatherCard
        key={weatherData.id}
        city={weatherData.name}
        description={weatherData.weather[0].description}
        temp={weatherData.main.temp}
        dt={weatherData.dt}
        imageUrl={getWeatherIconUrl(weatherData.weather[0].icon)}
      />
    );
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }} style={weatherStyles.Historycontainer}  >
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : weatherDataList.length === 0 ? (
        <Text style={styles.noHistoryText}>No history available.</Text>
      ) : (
        weatherDataList.map((weatherData) => renderWeatherCard(weatherData))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({

  noHistoryText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#888',
    fontSize: 16,
  },
});

export default HistoryScreen;
