import {StyleSheet} from 'react-native';

const headerStyles = StyleSheet.create({
  headerCard: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0D0D0D',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    margin: 10,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLogoIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  headerTextContainer: {
    marginLeft: 10,
  },
  betName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'green',
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  addButtonText: {
    fontSize: 14,
    color: '#FFF',
    marginLeft: 5,
  },
});

export default headerStyles;
