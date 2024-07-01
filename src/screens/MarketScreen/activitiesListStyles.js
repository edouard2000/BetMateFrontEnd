import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
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
    flex: 2,
  },
  price: {
    fontSize: 12,
    color: '#FFFFFF',
    flex: 1,
    textAlign: 'right',
  },
  detailButton: {
    backgroundColor: '#1E88E5',
    paddingVertical: 2.5,
    paddingHorizontal: 8,
    borderRadius: 5,
    marginLeft: 20,
  },
  detailButtonText: {
    color: '#FFFFFF',
  },
  buyButton: {
    backgroundColor: '#B71C1C',
    paddingVertical: 2.5,
    paddingHorizontal: 8,
    borderRadius: 5,
    marginLeft: 10,
  },
  buyButtonText: {
    color: '#FFFFFF',
  },
});

export default styles;
