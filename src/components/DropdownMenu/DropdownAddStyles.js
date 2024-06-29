import {StyleSheet} from 'react-native';

const DropdownAddStyles = StyleSheet.create({
  dropdownMenu: {
    position: 'absolute',
    bottom: 60,
    left: '50%',
    transform: [{translateX: -100}],
    width: 200,
    backgroundColor: '#151515',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    zIndex: 1000,
  },
  dropdownMenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#1E88E5',
  },
  dropdownMenuItemText: {
    marginLeft: 10,
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default DropdownAddStyles;
