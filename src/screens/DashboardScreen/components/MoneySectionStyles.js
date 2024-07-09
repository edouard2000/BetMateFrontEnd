import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: 20,
  },
  moneyBox: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#2B2B2B',
    borderRadius: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  moneyTitle: {
    fontSize: 16,
    color: '#FFFFFF',
    marginTop: 5,
    fontWeight: 'bold',
  },
  moneyAmount: {
    fontSize: 18,
    color: '#3498db',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;
