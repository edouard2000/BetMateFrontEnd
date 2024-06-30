import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  topSection: {
    backgroundColor: '#121212',
    paddingBottom: 20,
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 15,
  },
  notificationButton: {
    padding: 10,
  },
  balanceContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  balanceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E88E5',
    textShadowColor: '#000000',
    textShadowOffset: {width: 1, height: 1},
  },
  actionButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  actionButton: {
    alignItems: 'center',
  },
  actionButtonNumber: {
    fontSize: 13,
    color: '#1E88E5',
  },
  actionButtonText: {
    color: 'gray',
    fontSize: 15,
    marginTop: 5,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  tab: {
    padding: 10,
  },
  tabActive: {
    padding: 10,
    borderBottomColor: '#1E88E5',
  },
  tabText: {
    color: '#AAAAAA',
    fontSize: 14,
  },
  tabTextActive: {
    color: '#1E88E5',
    fontSize: 14,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingVertical: 5,
    alignItems: 'center',
  },
  homeButton: {
    padding: 10,
  },
});

export default styles;
