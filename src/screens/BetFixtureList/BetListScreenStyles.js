import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  headerCard: {
    padding: 8,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1c1c1c',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    margin: 10,
    borderWidth: 2,
    borderColor: '#3498db',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTextContainer: {
    marginLeft: 5,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  betName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  ownerName: {
    fontSize: 10,
    color: '#FFF',
  },
  headerRight: {
    alignItems: 'flex-end',
  },
  statusText: {
    fontSize: 10,
    color: '#FFF',
    marginBottom: 4,
  },
  openStatus: {
    color: '#00FF00',
  },
  fullStatus: {
    color: '#FF0000',
  },
  balanceText: {
    fontSize: 12,
    color: '#FFD700',
  },
  betCard: {
    backgroundColor: '#1c1c1c',
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#3498db',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leagueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leagueIcon: {
    width: 20,
    height: 20,
    borderRadius: 15,
    marginRight: 5,
  },
  leagueText: {
    fontSize: 14,
    color: '#FFF',
  },
  teamContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 25,
  },
  team: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  teamName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    marginLeft: 5,
  },
  teamIcon: {
    width: 15,
    height: 15,
    borderRadius: 10,
  },
  vsText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#A5D6A7',
    marginHorizontal: 5,
  },
  multipliersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  multiplierBox: {
    alignItems: 'center',
  },
  multiplier: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: 'bold',
  },
  multiplierLabel: {
    fontSize: 12,
    color: '#A5D6A7',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#3498db',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  removeButton: {
    backgroundColor: '#FF0000',
  },
  addButtonText: {
    fontSize: 14,
    color: '#FFF',
  },
  betTime: {
    fontSize: 14,
    color: '#FFF',
  },
  moreButton: {
    marginHorizontal: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'black',
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 15,
  },
  detailText: {
    fontSize: 16,
    color: '#FFF',
    marginVertical: 5,
  },
  closeButton: {
    marginTop: 15,
    padding: 10,
    backgroundColor: '#3498db',
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 5,
  },
});

export default styles;
