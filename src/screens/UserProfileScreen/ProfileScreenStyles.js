import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: '#151515',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginHorizontal: 10,
  },
  headerDetails: {
    flex: 1,
    marginLeft: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E0E0E0',
    fontFamily: 'Roboto-Bold',
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#E0E0E0',
    fontFamily: 'Roboto-Regular',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  headerIcon: {
    marginHorizontal: 5,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  section: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#151515',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginHorizontal: 10,
  },
  personalInfoSection: {
    backgroundColor: '#151515',
  },
  paymentMethodsSection: {
    backgroundColor: '#151515',
  },
  settingsSection: {
    backgroundColor: '#151515',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E0E0E0',
    fontFamily: 'Roboto-Bold',
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoLabel: {
    fontSize: 14,
    color: '#E0E0E0',
    flex: 2,
    textAlign: 'left',
    marginLeft: 10,
    fontFamily: 'Roboto-Medium',
  },
  infoValue: {
    fontSize: 12,
    color: '#ffffff',
    flex: 3,
    textAlign: 'left',
    marginLeft: 10,
    fontFamily: 'Roboto-Regular',
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  settingsText: {
    fontSize: 14,
    color: '#E0E0E0',
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
    marginHorizontal: 20,
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
