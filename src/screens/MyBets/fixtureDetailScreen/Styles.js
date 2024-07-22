import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
  },

  fixtureCard: {
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
    width: 30,
    height: 30,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#FFF',
  },
  leagueText: {
    fontSize: 16,
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
    alignItems: 'center',
  },
  teamName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: 5,
  },
  teamIcon: {
    width: 25,
    height: 25,
    borderRadius: 20,
    backgroundColor: '#FFF',
  },
  statusText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#A5D6A7',
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
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  removeButton: {
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  removeButtonText: {
    color: 'red',
    textAlign: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 5,
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
  customizeButton: {
    backgroundColor: '#3498db',
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  customizeButtonText: {
    fontSize: 14,
    color: '#FFF',
  },
});

export default styles;
