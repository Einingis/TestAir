import { StyleSheet } from 'react-native';

export const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#afb9ba',
    justifyContent: 'space-between',
    paddingBottom: 50
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: '80%'
  },
  inputContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  inputWindow: {
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '70%',
    paddingLeft: 5,

  },
  buttonContainer: {
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 10,
    width: '25%',
    backgroundColor: '#afb9ba',
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,

    elevation: 5,
  },
  historyContainer: {
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 10,
    height: 'auto',
    width: 130,
    alignSelf: 'center',
    marginBottom: 20,
    backgroundColor: '#afb9ba',
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,

    elevation: 5,
  },
});