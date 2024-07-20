import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  headerCard: {
    padding: 8,
    marginBottom: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0D0D0D',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    margin: 10,
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
    borderRadius: 20,
  },
  betName: {
    fontSize: 14,
    color: 'white',
    marginLeft: 10,
    fontFamily: "bold",
  },
  headerRight: {
    alignItems: 'flex-end',
  },
  betCard: {
    backgroundColor: '#0D0D0D',
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
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  team: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  teamName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: 5,
  },
  teamIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  statusText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#A5D6A7',
    marginHorizontal: 5,
  },
  multipliersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    marginHorizontal: 20,
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
  moreButtonText: {
    color: '#3498db',
    textAlign: 'center',
    marginTop: 10,
  },
  moreButton: {
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  navButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navButtonText: {
    color: '#3498db',
    fontSize: 16,
    marginLeft: 5,
    marginRight: 5,
  },
  addButton: {
    backgroundColor: '#3498db',
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  addButtonText: {
    fontSize: 14,
    color: '#FFF',
  },
});

export default styles;
