import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
    marginVertical: 10,
    backgroundColor: '#0D0D0D',
    borderRadius: 5,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  betName: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: 'bold',
    marginRight: 65,
  },
  addButton: {
    paddingVertical: 3,
    paddingHorizontal: 8,
    backgroundColor: '#1E88E5',
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  fixtureCard: {
    backgroundColor: '#0D0D0D',
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
  },
  fixtureHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  status: {
    fontSize: 10,
    fontStyle: 'italic',
  },
  pending: {
    color: '#1E88E5',
  },
  won: {
    color: '#1E88E5',
  },
  lost: {
    color: '#1E88E5',
  },
  fixtureContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  teamContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  teamIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginBottom: 5,
  },
  teamName: {
    color: '#FFF',
    fontSize: 14,
  },
  dateContainer: {
    alignItems: 'center',
  },
  time: {
    color: '#FFF',
    fontSize: 14,
  },
  date: {
    color: '#B0B0B0',
    fontSize: 12,
  },
  fixtureFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  oddsLabel: {
    color: '#1E88E5',
    fontSize: 10,
  },
  removeButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  removeButtonText: {
    color: '#FF0000',
    fontSize: 14,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  navButton: {
    padding: 10,
  },
  navButtonText: {
    color: '#1E88E5',
    fontSize: 16,
  },
});
