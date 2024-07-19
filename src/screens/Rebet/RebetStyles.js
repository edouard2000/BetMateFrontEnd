import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  betCard: {
    marginVertical: 10,
    backgroundColor: '#0D0D0D',
    borderRadius: 10,
    padding: 15,
    elevation: 5,
  },
  statusContainer: {
    alignItems: 'flex-end',
    marginBottom: 5,
  },
  betHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 20,
    marginRight: 10,
  },
  headerInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E0E0E0',
  },
  time: {
    fontSize: 12,
    color: '#B0B0B0',
    textAlign: 'left',
  },
  status: {
    fontSize: 10,
    paddingVertical: 2,
    paddingHorizontal: 3,
    textAlign: 'center',
  },
  statusWon: {
    color: '#4CAF50',
  },
  statusLost: {
    color: '#F44336',
  },
  statusPending: {
    color: '#FFEB3B',
  },
  statusDefault: {
    color: '#1E88E5',
  },
  betAmount: {
    fontSize: 15,
    color: '#ffffff',
    marginLeft: 10,
  },
  teamsContainer: {
    marginTop: 10,
  },
  teamItem: {
    backgroundColor: '#0D0D0D',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  gameHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  teamContainer: {
    alignItems: 'center',
  },
  teamAvatar: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  teamName: {
    fontSize: 12,
    color: '#E0E0E0',
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
  },
  vsText: {
    fontSize: 14,
    color: '#E0E0E0',
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
  gameText: {
    fontSize: 12,
    color: '#E0E0E0',
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  gameTime: {
    fontSize: 10,
    color: '#B0B0B0',
    textAlign: 'left',
  },
  betTerm: {
    fontSize: 14,
    color: '#1E88E5',
    fontWeight: 'bold',
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginLeft: 10,
  },
  oddsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  oddBox: {
    backgroundColor: '#1A1A1A',
    borderRadius: 10,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '30%',
  },
  oddText: {
    fontSize: 12,
    color: '#E0E0E0',
    fontWeight: 'bold',
  },
  oddValue: {
    fontSize: 12,
    color: '#1E88E5',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    marginTop: 10,
    backgroundColor: '#0D0D0D',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
  },
  footerButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerButtonText: {
    color: '#1E88E5',
    marginLeft: 5,
  },
  lineContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
  blackHorizontalLine: {
    width: '100%',
    height: 2,
    backgroundColor: '#000',
    marginVertical: 5,
  },
});

export default styles;
