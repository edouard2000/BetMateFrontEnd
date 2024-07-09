import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000', // Pure black
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#000000', // Pure black
  },
  footer: {
    backgroundColor: '#000000',
    padding: 10,
    alignItems: 'center',
  },
  sectionContainer: {
    paddingVertical: 10,
  },
  section: {
    marginBottom: 20,
    backgroundColor: '#000000',
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    padding: 10,
  },
  sectionHeader: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionContent: {
    padding: 10,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1E88E5',
    fontFamily: 'Roboto',
  },
  editText: {
    fontSize: 12,
    color: '#1E88E5',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoLabel: {
    fontSize: 12,
    color: 'white',
    flex: 2,
    fontFamily: 'Roboto',
    marginLeft: 10,
  },
  infoValue: {
    fontSize: 12,
    color: 'white',
    flex: 3,
    fontFamily: 'Roboto',
  },
  verifyText: {
    fontSize: 12,
    color: '#1E88E5',
    marginLeft: 10,
  },
  verifyButton: {
    fontSize: 12,
    color: '#1E88E5',
    marginLeft: 10,
    textDecorationLine: 'underline',
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  settingsText: {
    fontSize: 12,
    color: 'white',
    marginLeft: 10,
    fontFamily: 'Roboto-Medium',
  },
  logout: {
    fontSize: 14,
    color: '#1E88E5',
    marginLeft: 10,
    fontFamily: 'Roboto-Medium',
  },
  divider: {
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
    height: 1,
    backgroundColor: '#1E88E5',
    marginHorizontal: 5,
  },
});

export default styles;
