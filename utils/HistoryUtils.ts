import AsyncStorage from '@react-native-async-storage/async-storage';

const HISTORY_KEY = 'city_search_history';

export const addToHistory = async (city: string): Promise<void> => {
  try {
    const historyString = await AsyncStorage.getItem(HISTORY_KEY);
    const history = historyString ? JSON.parse(historyString) : [];

    console.log(history);

    const updatedHistory = [city, ...history.filter((c: string) => c !== city)].slice(0, 5);

    await AsyncStorage.setItem(HISTORY_KEY, JSON.stringify(updatedHistory));
  } catch (error) {
    console.error('Failed to update history:', error);
  }
};

export const getHistory = async (): Promise<string[]> => {
  try {
    const historyString = await AsyncStorage.getItem(HISTORY_KEY);
    return historyString ? JSON.parse(historyString) : [];
  } catch (error) {
    console.error('Failed to retrieve history:', error);
    return [];
  }
};
