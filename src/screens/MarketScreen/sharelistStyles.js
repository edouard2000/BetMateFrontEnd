import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#0D0D0D',
    borderRadius: 6,
    marginVertical: 5,

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
  name: {
    fontSize: 14,
    color: '#FFFFFF',
    flex: 2,
  },
  shareValue: {
    fontSize: 14,
    color: '#FFFFFF',
    flex: 1.5,
    textAlign: 'right',
  },
  recentChange: {
    fontSize: 12,
    flex: 1.5,
    textAlign: 'right',
  },
  buyButton: {
    backgroundColor: '#1E88E5',
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 5,
    marginLeft: 15,
  },
  buyButtonText: {
    color: '#FFFFFF',
  },
});

export default styles;
