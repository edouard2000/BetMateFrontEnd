import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  keyboardContainer: {
    flex: 1,
  },
  messagesList: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingTop: 10,
    paddingBottom: 60,
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
    paddingBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1c1c1c',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    color: '#FFF',
    paddingHorizontal: 10,
  },
  emojiPickerContainer: {
    height: 250,
    backgroundColor: '#000',
  },
  emojiPicker: {
    backgroundColor: '#000',
    borderColor: '#333',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: '#333',
  },
});

export default styles;
