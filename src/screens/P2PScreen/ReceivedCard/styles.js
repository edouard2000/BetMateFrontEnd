import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#1A1A1A',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  headerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  gameInfo: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  betInfo: {
    alignItems: 'flex-end',
  },
  betAmount: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  remainingTime: {
    fontSize: 12,
    color: '#E0E0E0',
  },
  detailSection: {
    marginVertical: 10,
  },
  dateTime: {
    fontSize: 14,
    color: '#E0E0E0',
  },
  participantSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  participantInfo: {
    fontSize: 14,
    color: '#E0E0E0',
  },
  footerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: '#3498db',
    marginHorizontal: 5,
  },
  footerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;
