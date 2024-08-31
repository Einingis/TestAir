import React, { useEffect, useState } from 'react';
import { View, Text, Button, Image, TextInput, StatusBar } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';

import { styles } from '../styles';
import { fetchWeatherData } from '../utils/FetchData';
import { addToHistory, getHistory } from '../utils/historyUtils'; // Import the history functions

const Logo = require('../assets/Logo.png');

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const [error, setError] = useState<string | null>(null);
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const openWeather = (city: string) => {
    fetchWeatherData(city)
      .then(async (data) => {
        setError(null);
        await addToHistory(data.name);

        navigation.navigate('Weather', { weatherData: data });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const openHistory = () => {
    navigation.navigate('History');
  };

  return (
    <View style={styles.container}>
      <View style={styles.Logo}>
        <Image source={Logo} style={{ width: '100%', resizeMode: 'contain' }} />
      </View>
      <StatusBar barStyle="default" />
      <Formik
        initialValues={{ city: '' }}
        onSubmit={values => openWeather(values.city)
        }
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <TextInput
              onChangeText={handleChange('city')}
              onBlur={handleBlur('city')}
              value={values.city}
              placeholder={"Enter city name"}
              style={{ borderWidth: 1, padding: 10, marginVertical: 10 }}
            />
            <Button onPress={() => handleSubmit()} title="Submit" />
          </View>
        )}
      </Formik>
      {error && (
        <View>
          <Text style={{ color: 'red' }}>Error: {error}</Text>
        </View>
      )}
      <Button onPress={() => openHistory()} title='History' />
    </View>
  );
};

export default HomeScreen;
