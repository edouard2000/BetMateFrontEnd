import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#121212',
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 5,
    width: 280,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  status: {
    fontSize: 10,
  },
  statusWon: {
    color: '#4CAF50',
  },
  statusLost: {
    color: '#F44336',
  },
  statusPending: {
    color: '#808080',
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
    marginRight: 'auto',
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
  },
  peopleJoined: {
    color: '#ffffff',
    fontSize: 12,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  amountBetted: {
    color: '#1E88E5',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  cancelButton: {
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#FF0000',
    fontSize: 14,
    marginLeft: 5,
  },
  editButtonText: {
    color: '#FFA500',
    fontSize: 14,
    marginLeft: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#000000',
    padding: 10,
    borderRadius: 5,
  },
  modalText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
});

export default styles;
