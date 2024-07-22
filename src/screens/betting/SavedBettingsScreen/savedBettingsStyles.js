import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  footerButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  footerButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});
