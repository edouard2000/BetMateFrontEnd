import {StyleSheet} from 'react-native';

const fixtureDetailStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
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
  customizeButton: {
    backgroundColor: '#3498db',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  customizeButtonText: {
    fontSize: 14,
    color: '#FFF',
  },
  customizeContainer: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#1C1C1C',
    borderRadius: 10,
  },
  customizeLabel: {
    fontSize: 16,
    color: '#E0E0E0',
    marginBottom: 5,
  },
  customizeInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  customizeInputLabel: {
    fontSize: 14,
    color: '#E0E0E0',
    marginRight: 10,
    flex: 1,
  },
  customizeInput: {
    backgroundColor: '#1E1E1E',
    color: '#FFF',
    padding: 8,
    borderRadius: 5,
    flex: 2,
  },
  lineContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#1E88E5',
    marginHorizontal: 5,
  },
  horizontalLine: {
    width: '80%',
    height: 1,
    backgroundColor: '#1E88E5',
    marginHorizontal: 5,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: '#FF0000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default fixtureDetailStyles;
