import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  section: {
    marginVertical: 15,
    padding: 15,
    backgroundColor: '#1A1A1A',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#1E88E5',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#B0C4DE',
    marginBottom: 10,
  },
  sectionContent: {
    paddingVertical: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoLabel: {
    fontSize: 16,
    marginLeft: 10,
    color: '#E0E0E0',
    flex: 3,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  infoValue: {
    fontSize: 16,
    color: '#E0E0E0',
    flex: 2,
    textAlign: 'left',
    marginLeft: 70,
  },
  chartContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  chart: {
    borderRadius: 10,
  },
  chartPercentage: {
    position: 'absolute',
    top: '45%',
    left: '45%',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E0E0E0',
  },
  lineContainer: {
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
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  statsBox: {
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: '#1A1A1A',
    borderRadius: 10,
    borderWidth: 0.4,
    borderColor: '#1E88E5',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  statsLabel: {
    fontSize: 14,
    color: '#AAAAAA',
    marginTop: 5,
  },
  statsValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#E0E0E0',
  },
});

export default styles;
