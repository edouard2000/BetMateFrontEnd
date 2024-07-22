import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0D0D0D',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  menuButton: {
    padding: 10,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationButton: {
    marginRight: 10,
  },
  chatButton: {
    marginLeft: 10,
  },
  topSection: {
    backgroundColor: '#0D0D0D',
    borderRadius: 15,
    marginTop: 10,
    padding: 20,
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
  enclosedActionButton: {
    alignItems: 'center',
    backgroundColor: '#111111',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
  },
  actionButtonNumber: {
    fontSize: 15,
    color: '#1E88E5',
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    marginTop: 5,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  tab: {
    padding: 5,
  },
  tabWrapper: {
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    fontSize: 12,
  },
  tabTextActive: {
    color: '#1E88E5',
    fontSize: 12,
  },
  listContainer: {
    flex: 1,
    marginTop: 10,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
  footerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 6,
    borderRadius: 5,
    backgroundColor: '#0D0D0D',
  },
  backButton: {
    backgroundColor: '#0D0D0D',
  },
  withdrawButton: {
    backgroundColor: '#2C2C2C',
  },
  depositButton: {
    backgroundColor: '#1E88E5',
  },
  footerButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    marginLeft: 5,
  },
});

export default styles;
