import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  headerContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#0D0D0D',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomColor: '#333333',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  balanceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E88E5',
    marginBottom: 5,
  },
  recentChange: {
    fontSize: 14,
    marginTop: 5,
  },
  section: {
    marginBottom: 20,
    backgroundColor: '#121212',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 35,
  },
  sectionTitleContainer: {
    backgroundColor: 'black',
    padding: 5,
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
    paddingHorizontal: 10,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoLabel: {
    fontSize: 14,
    color: '#CCCCCC',
    flex: 2,
  },
  infoValue: {
    fontSize: 14,
    color: '#1E88E5',
    flex: 3,
    textAlign: 'right',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#000000',
    padding: 10,
  },
  footerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  footerButtonLeft: {
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  footerButtonCenter: {
    alignSelf: 'center',
  },
  footerButtonRight: {
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  footerButtonText: {
    color: '#3498db',
    fontSize: 16,
    marginLeft: 5,
  },
  tradeButton: {
    backgroundColor: '#3498db',
  },
  tradeButtonText: {
    color: '#FFFFFF',
  },
});

export default styles;
