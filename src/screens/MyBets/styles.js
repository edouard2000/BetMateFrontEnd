import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    marginTop: 10,
  },
  filterButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#1e1e1e',
  },
  activeFilterButton: {
    backgroundColor: '#1E88E5',
  },
  filterText: {
    color: '#E0E0E0',
    fontWeight: 'bold',
  },
  activeFilterText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#121212',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    borderColor: '#000',
    borderWidth: 2,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 5,
    marginBottom: 10,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  betName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#E0E0E0',
    marginLeft: 10,
  },
  headerRight: {
    alignItems: 'flex-end',
  },
  status: {
    fontSize: 12,
  },
  statusActive: {
    color: '#2ECC71',
  },
  statusPending: {
    color: '#FFA500',
  },
  statusCompleted: {
    color: '#3498db',
  },
  statusDefault: {
    color: '#3498db',
  },
  amount: {
    fontSize: 10,
    color: 'gray',
    fontWeight: 'bold',
  },
  bodySection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  bodyLabel: {
    fontSize: 12,
    color: 'gray',
    marginRight: 20,
  },
  bodyValue: {
    color: '#1E88E5',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  footerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  footerButtonText: {
    marginLeft: 5,
  },
  chatButtonText: {
    color: '#3498db',
  },
  editButtonText: {
    color: '#FFA500',
  },
  declineButtonText: {
    color: '#FF0000',
  },
  lineContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
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
  footerContainer: {
    alignItems: 'center',
    padding: 5,
  },
});

export default styles;
