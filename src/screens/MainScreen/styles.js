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
    padding: 15,
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
  trendingSwitchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  switchLabel: {
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 10,
  },
  switch: {
    transform: [{scaleX: 0.8}, {scaleY: 0.8}],
  },
  trendingSection: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#151515',
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  trendingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  trendingTitle: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  trendingTitleActive: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  trendingText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  activeIndicator: {
    width: 30,
    height: 2,
    backgroundColor: '#1E88E5',
    marginTop: 5,
  },
  trendingNavIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  betsList: {
    paddingLeft: 10,
    marginTop: 10,
  },
  categoryHeader: {
    position: 'sticky',
    top: 0,
    zIndex: 10,
    backgroundColor: '#000000',
    paddingVertical: 10,
  },
  categoryList: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  categoryTitle: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginHorizontal: 5,
  },
  categoryTitleActive: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#1E88E5',
  },
  categoryText: {
    color: '#AAAAAA',
    fontSize: 16,
  },
  categoryTextActive: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  activeCategoryIndicator: {
    width: 50,
    height: 2,
    backgroundColor: '#1E88E5',
    marginTop: 5,
    alignSelf: 'center',
  },
  content: {
    flex: 1,
    marginHorizontal: 10,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  betGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  betCardContainer: {
    width: '25%',
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
