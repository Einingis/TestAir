import { StyleSheet } from 'react-native';

export const weatherStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#afb9ba',
    justifyContent: 'center',
    paddingTop: 20,
    alignItems: 'center'
  },
  Historycontainer: {
    backgroundColor: '#afb9ba',
    paddingBottom: 10,
    paddingTop: 10,
  },
  card: {
    backgroundColor: '#d4d4d4',
    width: '90%',
    padding: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,

    elevation: 5,
    marginBottom: 20
  },
  weatherContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImage: {
    width: 40,
    paddingTop: 40,
    resizeMode: 'contain',
  },
  description: {
    textTransform: 'capitalize',
    fontSize: 20
  },
  cardTitle: {
    fontSize: 60,
    textAlign: 'center',
    fontWeight: '600',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },
  city: {
    fontSize: 20
  },
  date: {
    alignItems: 'center',
  },
  cardContent: {
    fontSize: 20
  }

});