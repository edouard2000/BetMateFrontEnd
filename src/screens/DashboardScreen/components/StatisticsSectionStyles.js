// components/StatisticsSectionStyles.js
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginBottom: 20,
    backgroundColor: '#121212',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginHorizontal: 10,
  },
  statsBox: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    margin: 2,
    backgroundColor: '#151515',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  statsValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 5,
    fontFamily: 'Roboto-Bold',
  },
  statsLabel: {
    fontSize: 12,
    color: '#AAAAAA',
    fontFamily: 'Roboto-Regular',
  },
});

export default styles;
