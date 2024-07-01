import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000', // Ensure background color matches the theme
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#111111',
    borderRadius: 6,
    marginVertical: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 25,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 14,
    color: '#FFFFFF',
    flex: 1,
  },
  shares: {
    fontSize: 12,
    color: '#FFFFFF',
    flex: 1,
    textAlign: 'right',
  },
  shareValue: {
    fontSize: 12,
    color: '#FFFFFF',
    flex: 1,
    textAlign: 'right',
  },
  sellButton: {
    backgroundColor: '#1E88E5',
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 5,
    marginLeft: 15,
  },
  sellButtonText: {
    color: '#FFFFFF',
  },
});

export default styles;
