import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    backgroundColor: '#0D0D0D',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    borderColor: '#000',
    borderWidth: 2,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 5,
    marginBottom: 10,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  headerTextContainer: {
    marginLeft: 10,
  },
  betName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E0E0E0',
    fontStyle: 'italic',
  },
  date: {
    color: '#B0B0B0',
    fontSize: 12,
    fontStyle: 'italic',
  },
  headerRight: {
    alignItems: 'flex-end',
  },
  status: {
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  statusSaved: {
    color: '#3498db',
  },
  amount: {
    fontSize: 14,
    color: '#E0E0E0',
    fontWeight: 'bold',
  },
  bodySection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  bodyTextContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bodyLabel: {
    fontSize: 14,
    color: '#FFFFFF',
    marginRight: 20,
  },
  bodyValue: {
    color: '#1E88E5',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  footerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  footerButtonsRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginLeft: {
    marginLeft: 10,
  },
  betButtonText: {
    marginLeft: 5,
    fontWeight: 'bold',
    color: '#2ECC71',
  },
  editButtonText: {
    marginLeft: 5,
    fontWeight: 'bold',
    color: 'orange',
  },
  deleteButtonText: {
    marginLeft: 5,
    fontWeight: 'bold',
    color: 'red',
  },
  lineContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
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
