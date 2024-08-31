import { StyleSheet } from 'react-native';

export const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3e3e3e',
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
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputContainer: {
    width: '60%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  inputWindow: {
    borderWidth: 1,
    marginRight: 20,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    padding: 10,
    marginLeft: -40,
    width: '100%',
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 10,
    marginBottom: 20,
  },
  historyContainer: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 10,
    height: 35,
    width: 130,
    alignSelf: 'center',
    marginBottom: 20,
  },
});