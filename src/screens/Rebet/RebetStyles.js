import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },
  betCard: {
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#121212',
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
    backgroundColor: '#151515',
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
  teamAvatar: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginHorizontal: 15,
  },
  gameText: {
    fontSize: 12,
    color: '#E0E0E0',
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  gameTimeContainer: {
    alignItems: 'center',
    marginTop: 5,
  },
  gameTime: {
    fontSize: 10,
    color: '#B0B0B0',
    textAlign: 'center',
  },
  betTerm: {
    fontSize: 10,
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
    padding: 8,
    backgroundColor: '#121212',
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  oddText: {
    fontSize: 12,
    color: '#E0E0E0',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    marginTop: 10,
    backgroundColor: '#151515',
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
    marginVertical: 10,
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
