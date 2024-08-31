import React, { useState } from 'react';
import { View, Text, Button, Image, TextInput, StatusBar } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';

import { styles } from '../styles';

const Logo = require('../assets/Logo.png');

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const [error, setError] = useState<string | null>(null);
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const fetchWeatherData = (city: string) => {
    const apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=10692b614cde4a27abc3caf08c696dfa&units=metric`;

    fetch(apiLink)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod !== 200) {
          throw new Error(data.message);
        }
        setError(null);
        navigation.navigate('Weather', { weatherData: data });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.Logo}>
        <Image source={Logo} style={{ width: '100%', resizeMode: 'contain' }} />
      </View>
      <StatusBar barStyle="default" />
      <Formik
        initialValues={{ city: '' }}
        onSubmit={values => fetchWeatherData(values.city)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <TextInput
              onChangeText={handleChange('city')}
              onBlur={handleBlur('city')}
              value={values.city}
              placeholder={"Enter city name"}
              style={{ borderWidth: 1, padding: 10, marginVertical: 10 }} // Added some basic styling for better UI
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
    </View>
  );
};

export default HomeScreen;
