import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 10,
  },
  createP2PButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'green',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  createP2PButtonText: {
    color: '#ffffff',
    fontSize: 14,
    marginRight: 5,
  },
  bodyContainer: {
    flex: 1,
    padding: 10,
  },
  trendingSection: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#151515',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  trendingHeader: {
    flexDirection: 'row',
    justifyContent: 'left',
  },
  trendingText: {
    color: '#AAAAAA',
    fontSize: 16,
  },
  betsList: {
    paddingLeft: 10,
    marginTop: 10,
  },
  tableContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#0D0D0D',
  },
  tableHeader: {
    color: '#AAAAAA',
    fontSize: 10,
    flex: 1,
    textAlign: 'center',
  },
  requestsList: {
    flex: 1,
    paddingVertical: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: '#0D0D0D',
    borderRadius: 10,
  },
});

export default styles;
