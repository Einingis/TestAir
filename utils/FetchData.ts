export const fetchWeatherData = (city: string): Promise<any> => {
  const apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=10692b614cde4a27abc3caf08c696dfa&units=metric`;

  return fetch(apiLink)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod !== 200) {
        throw new Error(data.message);
      }
      return data;
    })
    .catch((err) => {
      throw err;
    });
};

export const getWeatherIconUrl = (iconId: string): string => {
  return `https://openweathermap.org/img/wn/${iconId}@2x.png`;
};
