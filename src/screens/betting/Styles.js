import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    marginTop: 10,
  },
  filterButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#0D0D0D',
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
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  footerContainer: {
    alignItems: 'center',
    padding: 5,
  },
});
