import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#151515',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 10,
    elevation: 5,
  },
  navButton: {
    paddingBottom: 6,
  },
  navText: {
    fontSize: 18,
    color: '#E0E0E0',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  activeNavText: {
    color: '#1E88E5',
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    borderRadius: 10,
    marginHorizontal: 10,
    paddingHorizontal: 15,
    height: 40,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    color: '#E0E0E0',
    fontSize: 14,
    marginLeft: 10,
  },
  contentContainer: {
    flex: 1,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: 'black',
    borderRadius: 10,
    marginHorizontal: 10,
    marginTop: 10,
  },
  footerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  footerButtonText: {
    color: '#1E88E5',
    marginLeft: 5,
    fontStyle: 'italic',
  },
});

export default styles;
