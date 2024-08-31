import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import { styles } from '../styles/MainStyles';
import { getHistory } from '../utils/HistoryUtils';

const HistoryScreen = () => {
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const storedHistory = await getHistory();
      setHistory(storedHistory);
    };

    fetchHistory();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>History Screen</Text>

      <Text style={{ marginTop: 20 }}>Search History:</Text>
      {history.map((city, index) => (
        <Text key={index} style={{ fontSize: 16 }}>{city}</Text>
      ))}
    </View>
  );
};

export default HistoryScreen;