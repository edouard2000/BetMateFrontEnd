import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 10,
    marginVertical: 10,
    paddingVertical: 5,
  },
  filterButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#1A1A1A',
  },
  activeFilterButton: {
    backgroundColor: '#1E88E5',
  },
  filterText: {
    color: '#E0E0E0',
    fontWeight: 'bold',
  },
  activeFilterText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
    padding: 20,
  },
  requestItem: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginVertical: 8,
    backgroundColor: '#1A1A1A',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  requestInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  userDetails: {
    flex: 1,
    marginLeft: 10,
  },
  requestName: {
    color: '#E0E0E0',
    fontSize: 16,
    fontStyle: 'italic',
  },
  requestTime: {
    color: '#AAAAAA',
    fontSize: 12,
    fontStyle: 'italic',
  },
  requestAmount: {
    color: '#E0E0E0',
    fontSize: 16,
    fontStyle: 'italic',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    marginTop: 10,
    borderTopWidth: 3,
    borderColor: 'black',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 14,
    fontStyle: 'italic',
    marginLeft: 5,
  },
  acceptText: {
    color: 'green',
  },
  rejectText: {
    color: 'red',
  },
  moreText: {
    color: '#1E88E5',
  },
  editText: {
    color: 'orange',
  },
  footerNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  switchButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchText: {
    color: '#E0E0E0',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  activeSwitchText: {
    color: '#1E88E5',
    fontWeight: 'bold',
  },
});
