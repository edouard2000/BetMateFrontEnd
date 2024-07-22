import {StyleSheet} from 'react-native';

const fixtureItemStyles = StyleSheet.create({
  fixtureCard: {
    backgroundColor: '#1C1C1C',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  leagueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leagueIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
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
  },
  team: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  teamIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  teamName: {
    fontSize: 16,
    color: '#FFF',
    marginLeft: 5,
  },
  statusText: {
    fontSize: 14,
    color: '#FFF',
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
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
  multiplierLabel: {
    fontSize: 12,
    color: '#A5D6A7',
  },
});

export default fixtureItemStyles;
