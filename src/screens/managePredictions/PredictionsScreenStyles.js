import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  predictionCardContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
    position: 'relative',
    backgroundColor: '#0D0D0D',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 25,
    height: 25,
    borderRadius: 20,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E0E0E0',
    fontStyle: 'italic',
  },
  subscriberInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subscriberCount: {
    fontSize: 14,
    color: '#757575',
    marginLeft: 5,
    fontStyle: 'italic',
  },
  cardBody: {
    marginTop: 5,
  },
  predictionItem: {
    borderRadius: 10,
    backgroundColor: '#0D0D0D',
    marginBottom: 10,
  },
  gameInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  teamContainer: {
    alignItems: 'center',
  },
  gameText: {
    fontSize: 14,
    color: '#E0E0E0',
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginTop: 5,
  },
  vsText: {
    fontSize: 16,
    color: '#E0E0E0',
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginHorizontal: 10,
  },
  teamAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  resultText: {
    fontSize: 14,
    color: '#E0E0E0',
    paddingHorizontal: 5,
    borderRadius: 5,
    overflow: 'hidden',
    fontStyle: 'italic',
  },
  statusText: {
    fontSize: 14,
    marginLeft: 10,
    fontStyle: 'italic',
    flex: 1,
    textAlign: 'right',
    marginTop: 5,
  },
  gameTime: {
    fontSize: 12,
    color: '#757575',
    marginTop: 5,
    fontStyle: 'italic',
    textAlign: 'left',
  },
  percentages: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  percentageText: {
    fontSize: 12,
    color: '#E0E0E0',
    fontStyle: 'italic',
  },
  progressBars: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  progressBar: {
    height: 5,
    borderRadius: 5,
    width: '30%',
    marginHorizontal: 2,
  },
  predictionActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingVertical: 5,
    backgroundColor: '#0D0D0D',
    borderRadius: 10,
    padding: 5,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    color: '#1E88E5',
    marginLeft: 5,
    fontStyle: 'italic',
  },
  moreButton: {
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#1E88E5',
    borderRadius: 5,
    marginTop: 10,
    alignSelf: 'center',
    width: 120,
  },
  moreButtonText: {
    color: '#E0E0E0',
    fontSize: 14,
    fontStyle: 'italic',
  },
  notes: {
    fontSize: 12,
    color: '#757575',
    marginTop: 10,
    fontStyle: 'italic',
  },
  readMoreText: {
    color: '#1E88E5',
    fontStyle: 'italic',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    marginTop: 15,
    borderTopWidth: 1,
    borderColor: '#000',
    backgroundColor: '#0D0D0D',
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    padding: 10,
  },
  footerButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerButtonText: {
    color: '#1E88E5',
    marginLeft: 5,
    fontStyle: 'italic',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#0D0D0D',
  },
  filterButton: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 5,
    backgroundColor: '#0D0D0D',
  },
  activeFilterButton: {
    backgroundColor: '#1E88E5',
  },
  filterText: {
    color: '#E0E0E0',
    fontStyle: 'italic',
  },
  activeFilterText: {
    color: '#FFFFFF',
  },
  lineContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#1E88E5',
    marginHorizontal: 5,
  },
  horizontalLine: {
    width: '80%',
    height: 1,
    backgroundColor: '#1E88E5',
    marginVertical: 5,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#0D0D0D',
  },
  bottomNavButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomNavButtonText: {
    color: '#1E88E5',
    marginLeft: 5,
    fontStyle: 'italic',
  },
});

export default styles;
