import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#000000',
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
    backgroundColor: '#121212',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1E88E5',
    textAlign: 'left',
    paddingLeft: 5,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionContent: {
    padding: 10,
  },
  editText: {
    fontSize: 14,
    color: '#1E88E5',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoLabel: {
    fontSize: 13,
    color: '#CCCCCC',
    flex: 2,
    marginLeft: 10,
  },
  infoValue: {
    fontSize: 12,
    color: '#FFFFFF',
    flex: 3,
  },
  verifyText: {
    fontSize: 14,
    color: '#1E88E5',
    marginLeft: 10,
  },
  verifyButton: {
    fontSize: 14,
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
    color: '#CCCCCC',
    marginLeft: 10,
  },
  logout: {
    fontSize: 14,
    color: '#1E88E5',
    marginLeft: 10,
  },
  horizontalLine: {
    width: '80%',
    height: 1,
    backgroundColor: '#1E88E5',
    marginHorizontal: 5,
  },
});

export default styles;
