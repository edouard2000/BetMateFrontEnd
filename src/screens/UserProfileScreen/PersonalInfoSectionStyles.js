import {StyleSheet} from 'react-native';

const personalInfoStyles = StyleSheet.create({
  section: {
    marginBottom: 20,
    backgroundColor: '#0D0D0D',
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
  iconColumn: {
    flex: 0.8,
    justifyContent: 'flex-start',
  },
  infoLabelColumn: {
    flex: 1.5,
    justifyContent: 'flex-start',
  },
  infoValueColumn: {
    flex: 3,
    justifyContent: 'flex-start',
  },
  verifyColumn: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  infoLabel: {
    fontSize: 13,
    color: '#CCCCCC',
  },
  infoValue: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  verifyText: {
    fontSize: 14,
    color: '#1E88E5',
  },
  verifyButton: {
    fontSize: 14,
    color: '#1E88E5',
    textDecorationLine: 'underline',
  },
});

export default personalInfoStyles;
