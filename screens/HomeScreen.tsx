import React, { useState } from 'react';
import { View, Text, Button, Image, TextInput, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';

import { mainStyles } from '../styles/MainStyles';
import { fetchWeatherData } from '../utils/FetchData';
import { addToHistory } from '../utils/HistoryUtils';

const Logo = require('../assets/Logo.png');

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const [error, setError] = useState<string | null>(null);
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const openWeather = async (city: string, resetForm: () => void) => {
    fetchWeatherData(city)
      .then(async (data) => {
        setError(null);
        await addToHistory(data.name);
        resetForm();
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={mainStyles.container} behavior="padding">
        <View style={mainStyles.centerContent}>
          <View style={mainStyles.logo}>
            <Image source={Logo} style={{ width: '100%', resizeMode: 'contain' }} />
          </View>
          <Formik
            initialValues={{ city: '' }}
            onSubmit={(values, { resetForm }) => openWeather(values.city, resetForm)}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View style={mainStyles.inputContainer}>
                <TextInput
                  onChangeText={handleChange('city')}
                  onBlur={handleBlur('city')}
                  value={values.city}
                  placeholder="Enter city name"
                  placeholderTextColor="#888"
                  style={mainStyles.inputWindow}
                />
                <View style={mainStyles.buttonContainer}>
                  <Button onPress={() => handleSubmit()} title="Go!" />
                </View>
              </View>
            )}
          </Formik>

          {error && (
            <View>
              <Text style={mainStyles.errorMessage}>Error: {error}</Text>
            </View>
          )}
        </View>
        <View style={mainStyles.historyContainer}>
          <Button onPress={openHistory} title="History" />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default HomeScreen;
