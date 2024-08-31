import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, Button } from 'react-native';
import { styles } from './styles';
import { Formik } from 'formik';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import Weather from './components/Weather';

const Logo = require('./assets/Logo.png');
const Stack = createNativeStackNavigator();

export default function App() {

  const [city_name, setCityName] = useState(''); // State to store the city name
  const [weatherData, setWeatherData] = useState(null); // State to store fetched weather data
  const [error, setError] = useState(null);

  useEffect(() => {

    if (city_name) {
      const apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=10692b614cde4a27abc3caf08c696dfa&units=metric`;

      // Fetch weather data
      fetch(apiLink)
        .then((response) => response.json())
        .then((data) => {
          if (data.cod !== 200) {
            throw new Error(data.message);
          }
          setWeatherData(data);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setWeatherData(null);
        });
    }
  }, [city_name]);

  return (
    <View style={styles.container}>
      <View style={styles.Logo}>
        <Image source={Logo} style={{ width: '100%', resizeMode: 'contain' }} />
      </View>
      <TextInput></TextInput>
      <StatusBar style="auto" />
      <Formik
        initialValues={{ city: '' }}
        onSubmit={values => setCityName(values.city)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <TextInput
              onChangeText={handleChange('city')}
              onBlur={handleBlur('city')}
              value={values.city}
              placeholder={"Enter city name"}
            />
            <Button onPress={() => handleSubmit()} title="Submit" />
          </View>
        )}
      </Formik>

      {/* Display weather data if available */}
      {weatherData && (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Weather" component={Weather} />
          </Stack.Navigator>
        </NavigationContainer>
        // <View>
        //   {/* <Text>Temperature: {weatherData.main.temp}°C</Text>
        //   <Text>Weather: {weatherData.weather[0].description}</Text>
        //   <Text>City: {weatherData.name}</Text> */}


        // </View>
      )}

      {/* Display error message if there is an error */}
      {error && (
        <View>
          <Text style={{ color: 'red' }}>Error: {error}</Text>
        </View>
      )}
    </View>
  );
}

