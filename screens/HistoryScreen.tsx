import React from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

import { styles } from '../styles';

type WeatherScreenProps = NativeStackScreenProps<RootStackParamList, 'History'>;

const HistoryScreen = ({ route }: WeatherScreenProps) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>History Screen</Text>
    </View>
  );
};

export default HistoryScreen;