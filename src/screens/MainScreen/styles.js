import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    marginHorizontal: -10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWithBadge: {
    position: 'relative',
    marginLeft: 20,
  },
  badge: {
    position: 'absolute',
    right: -4,
    top: -4,
    backgroundColor: 'red',
    borderRadius: 8,
    padding: 2,
    minWidth: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  notificationButton: {},
  chatButton: {},
  createBetButton: {
    borderWidth: 2,
    borderColor: '#1E88E5',
    backgroundColor: '#1E88E5',
    paddingVertical: 6,
    paddingHorizontal: 13,
    borderRadius: 10,
  },
  createBetButtonText: {
    color: '#fff',
    fontSize: 13,
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
    fontSize: 16,
    marginLeft: 10,
  },
  categoryList: {
    flex: 1,
  },
  categoryContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#151515',
    borderRadius: 10,
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: '#151515',
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  categoryTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1E88E5',
  },
  categoryIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryIcon: {
    marginLeft: 10,
  },
  betCountContainer: {
    backgroundColor: '#1E88E5',
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 8,
    marginLeft: 20,
  },
  betCountText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 10,
  },
  betsList: {
    paddingLeft: 20,
    marginTop: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 5,
  },
  dropdown: {
    position: 'absolute',
    bottom: 60,
    left: '50%',
    transform: [{translateX: -100}],
    backgroundColor: '#151515',
    borderRadius: 10,
    padding: 10,
    width: 200,
    zIndex: 1,
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: Platform.OS === 'android' ? 1 : 1,
    borderBottomColor: '#1E88E5',
  },
  dropdownItemText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  iconBackground: {
    backgroundColor: '#1A1A1A',
    padding: 5,
    borderRadius: 15,
  },
});

export default styles;
