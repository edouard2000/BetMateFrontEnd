import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#1D1D1D',
    borderRadius: 10,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 25,
    marginRight: 15,
  },
  headerTextContainer: {
    flex: 1,
  },
  headerText: {
    fontSize: 15,
    color: 'gray',
    fontWeight: 'bold',
  },
  headerSubText: {
    fontSize: 10,
    color: '#AAAAAA',
  },
  closeButton: {
    padding: 10,
  },
  body: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  label: {
    fontSize: 13,
    color: 'gray',
  },
  value: {
    fontSize: 12,
    color: '#1E88E5',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
  },
  sellButton: {
    backgroundColor: '#1E88E5',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 80,
  },
  sellButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  buyButton: {
    backgroundColor: 'red',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginLeft: 85,
  },
  buyButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default styles;
