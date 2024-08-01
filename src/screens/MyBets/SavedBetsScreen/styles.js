import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#0D0D0D',
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
    alignItems: 'center',
  },
  rightFooterButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  footerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  footerButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    marginLeft: 5,
  },
  addFixtureText: {
    color: '#1E88E5',
  },
  editButtonText: {
    color: '#FFA500',
  },
  publishButtonText: {
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

export default styles;
