import {StyleSheet} from 'react-native';

const customizeOddsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  oddsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1C1C1C',
    padding: 5,
    borderRadius: 5,
  },
  oddsLabel: {
    fontSize: 16,
    color: '#E0E0E0',
    marginLeft: 10,
  },
  oddsValue: {
    backgroundColor: '#2C2C2C',
    color: '#00FF00',
    padding: 3,
    borderRadius: 5,
    width: '30%',
    textAlign: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  navButton: {
    padding: 10,
  },
  navButtonText: {
    color: '#1E88E5',
    fontSize: 16,
  },
  saveButton: {
    padding: 10,
  },
  saveButtonText: {
    color: '#4CAF50',
    fontSize: 16,
  },
});

export default customizeOddsStyles;
