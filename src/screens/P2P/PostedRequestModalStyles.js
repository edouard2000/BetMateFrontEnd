import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#121212',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: 300,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  status: {
    fontSize: 10,
  },
  statusDefault: {
    color: '#FFFFFF',
  },
  gameTime: {
    color: 'gray',
    fontSize: 10,
    alignSelf: 'flex-end',
  },
  gameInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  teamLogo: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  gameText: {
    color: '#FFFFFF',
    fontSize: 14,
    marginHorizontal: 35,
  },
  peopleJoinedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    width: '100%',
  },
  peopleJoined: {
    color: '#ffffff',
    fontSize: 12,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  amountBetted: {
    color: '#1E88E5',
    fontSize: 16,
  },
  betTerms: {
    color: '#FFD700',
    fontSize: 14,
    marginHorizontal: 10,
  },
  joinButton: {
    marginHorizontal: 10,
  },
  joinButtonText: {
    color: '#2ecc71',
    fontSize: 14,
  },
});

export default styles;
