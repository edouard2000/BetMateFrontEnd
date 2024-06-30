import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#121212',
    borderRadius: 10,
    padding: 10,
    marginVertical: 2,
    marginHorizontal: 10,
  },
  tableCell: {
    flex: 1,
    alignItems: 'center',
  },
  tableHeader: {
    color: '#AAAAAA',
    fontSize: 12,
    flex: 1,
    textAlign: 'center',
  },
  time: {
    color: '#ffffff',
    fontSize: 12,
  },
  date: {
    color: 'gray',
    fontSize: 10,
  },
  gameText: {
    color: 'gray',
    fontSize: 10,
    marginHorizontal: 15,
  },
  teamLogo: {
    width: 25,
    height: 25,
    borderRadius: 15,
  },
  moreButton: {
    marginHorizontal: Platform.OS === 'ios' ? 0 : 15,
  },
  moreButtonText: {
    color: '#3498db',
    fontSize: 14,
  },
  amount: {
    color: '#1E88E5',
    fontSize: 16,
    marginHorizontal: 10,
  },
  joinButton: {
    marginHorizontal: 10,
  },
  joinButtonText: {
    color: '#2ecc71',
    fontSize: 14,
  },
});

export default styles;
