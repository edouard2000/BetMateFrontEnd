import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
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
  },
  titleBet: {
    color: '#FFFFFF',
  },
  titleMate: {
    color: '#1E88E5',
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
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'green',
    backgroundColor: 'green',
    paddingVertical: 4,
    paddingHorizontal: 13,
    borderRadius: 10,
  },
  plusIcon: {
    marginRight: 5,
  },
  createBetButtonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 40,
    marginBottom: 20,
    marginTop: 10,
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
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchLabel: {
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 10,
  },
  switch: {
    transform: [
      {scaleX: Platform.OS === 'android' ? 0.9 : 0.6},
      {scaleY: Platform.OS === 'android' ? 0.9 : 0.6},
    ],
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
  lineContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#1E88E5',
  },
  horizontalLine: {
    width: '80%',
    height: 2,
    backgroundColor: '#1E88E5',
    marginHorizontal: 5,
  },
});

export default styles;
