import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  mainContainer: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'space-between',
  },
  header: {
    position: 'absolute',
    top: 0,
    width: '100%',
    padding: 10,
    backgroundColor: '#2c2c2c',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    zIndex: 10,
  },
  keyboardContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  messagesList: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingTop: 10,
    paddingBottom: 20,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal: 10,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  messageContent: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    borderRadius: 10,
    padding: 10,
  },
  messageText: {
    color: '#FFF',
  },
  messageFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeCount: {
    color: '#FFF',
    marginLeft: 5,
  },
  senderName: {
    color: '#FFF',
    fontSize: 12,
    fontStyle: 'italic',
  },
  inputWrapper: {
    width: '100%',
    backgroundColor: '#000',
    paddingBottom: Platform.OS === 'ios' ? 20 : 10,
    paddingHorizontal: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1c1c1c',
    padding: 10,
    borderRadius: 10,
  },
  input: {
    flex: 1,
    color: '#FFF',
    paddingHorizontal: 10,
    height: 40,
  },
});

export default styles;
