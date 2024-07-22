import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  predictionCardContainer: {
    marginVertical: 10,
    position: 'relative',
    backgroundColor: '#0D0D0D',
    borderRadius: 10,
    padding: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 30,
    height: 30,
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
    marginTop: 10,
  },
  predictionItem: {
    borderRadius: 10,
    backgroundColor: '#0D0D0D',
    marginBottom: 10,
  },
  gameInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gameText: {
    fontSize: 14,
    color: '#E0E0E0',
    fontWeight: 'bold',
    fontStyle: 'italic',
    flex: 1,
    textAlign: 'center',
  },
  teamAvatar: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  resultText: {
    fontSize: 14,
    color: '#E0E0E0',
    paddingHorizontal: 5,
    borderRadius: 5,
    overflow: 'hidden',
    marginRight: 10,
    fontStyle: 'italic',
  },
  statusText: {
    fontSize: 14,
    marginLeft: 10,
    fontStyle: 'italic',
    flex: 1,
    textAlign: 'right',
  },
  gameTime: {
    fontSize: 12,
    color: '#757575',
    marginTop: 5,
    marginBottom: 10,
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
    borderTopWidth: 2,
    borderColor: '#000',
    backgroundColor: '#0D0D0D',
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    padding: 10,
  },
  blackHorizontalLine: {
    width: '100%',
    height: 2,
    backgroundColor: '#000',
    marginVertical: 5,
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
    padding: 10,
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
    marginVertical: 5, // Add margin to the lineContainer
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#1E88E5',
    marginHorizontal: 5, // Add margin to the dot
  },
  horizontalLine: {
    width: '80%',
    height: 1,
    backgroundColor: '#1E88E5',
    marginVertical: 5, // Add margin to the horizontal line
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#0D0D0D',
  },
});

export default styles;
