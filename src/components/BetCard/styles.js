import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    width: 200,
    margin: 10,
    backgroundColor: '#0D0D0D',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: Platform.OS === 'android' ? 5 : 5},
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: Platform.OS === 'android' ? 10 : 10,
  },
  headerSection: {
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0D0D0D',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  betName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E0E0E0',
    marginLeft: 10,
    flex: 1,
  },
  notificationBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#e74c3c',
    borderRadius: 8,
    width: 15,
    height: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
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
    height: 1,
    backgroundColor: '#1E88E5',
    marginHorizontal: 5,
  },
  bodySection: {
    padding: 10,
    backgroundColor: '#0D0D0D',
  },
  bodyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  bodyText: {
    fontSize: 14,
    marginLeft: 10,
    color: '#E0E0E0',
  },
  highlightedText: {
    color: '#1E88E5',
    fontWeight: 'bold',
  },
  footerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 6,
    backgroundColor: '#0D0D0D',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  betNowButton: {
    borderWidth: 1,
    borderColor: '#e74c3c',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  betNowButtonText: {
    color: '#e74c3c',
    fontWeight: 'bold',
  },
  footerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 80,
  },
  categoryIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  categoryIcon: {
    marginLeft: 10,
  },
});

export default styles;
