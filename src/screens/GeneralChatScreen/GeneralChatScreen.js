import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import io from 'socket.io-client';
import generateAvatarUrl from '../../utils/generateAvatarUrl';
import {useSelector, useDispatch} from 'react-redux';
import {setUnreadCount} from '../../store/unreadMessageSlice';

const socket = io('https://betmatebackend.onrender.com/');

const GeneralChatScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const userProfile = useSelector(state => state.user.profile);
  const unreadCount = useSelector(state => state.unreadMessage.unreadCount);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const flatListRef = useRef(null);

  useEffect(() => {
    socket.on('NEW_GLOBAL_MESSAGE', data => {
      setMessages(prevMessages => [...prevMessages, data.data]);
      if (data.data.userId !== userProfile._id) {
        dispatch(setUnreadCount(unreadCount + 1));
      }
    });

    socket.emit('fetchMessages');
    socket.on('messages', data => {
      setMessages(data.data);
      const unreadMessages = data.data.filter(
        msg => !msg.readBy.includes(userProfile._id),
      );
      dispatch(setUnreadCount(unreadMessages.length));
    });

    socket.on('likeUpdated', data => {
      setMessages(prevMessages =>
        prevMessages.map(msg => (msg._id === data.data._id ? data.data : msg)),
      );
    });

    return () => {
      socket.off('NEW_GLOBAL_MESSAGE');
      socket.off('messages');
      socket.off('likeUpdated');
    };
  }, [dispatch, userProfile._id]);

  useEffect(() => {
    if (unreadCount > 0 && flatListRef.current) {
      flatListRef.current.scrollToEnd({animated: true});
    }
  }, [unreadCount]);

  const sendMessage = async () => {
    if (inputText.trim()) {
      socket.emit('sendMessage', {
        userId: userProfile._id,
        message: inputText,
      });
      setInputText('');
    }
  };

  const markMessagesAsRead = () => {
    const unreadMessageIds = messages
      .filter(msg => !msg.readBy.includes(userProfile._id))
      .map(msg => msg._id);

    if (unreadMessageIds.length > 0) {
      socket.emit('markAsRead', {
        userId: userProfile._id,
        messageIds: unreadMessageIds,
      });
      dispatch(setUnreadCount(0));
    }
  };

  const toggleLike = messageId => {
    socket.emit('toggleLike', {
      userId: userProfile._id,
      messageId: messageId,
    });
  };

  const renderMessage = ({item, index}) => {
    const isFirstUnread =
      index === messages.length - unreadCount &&
      item.userId._id !== userProfile._id;
    return (
      <>
        {isFirstUnread && (
          <View style={styles.unreadBanner}>
            <Text style={styles.unreadBannerText}>New Messages</Text>
          </View>
        )}
        <View style={styles.messageContainer}>
          <Image
            source={{uri: item.avatar || generateAvatarUrl(item.senderName)}}
            style={styles.avatar}
          />
          <View style={styles.messageContent}>
            <Text style={styles.username}>{item.senderName}</Text>
            <Text style={styles.messageText}>{item.message}</Text>
            <View style={styles.messageFooter}>
              <Text style={styles.messageTime}>
                {new Date(item.createdAt).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </Text>
              <TouchableOpacity
                onPress={() => toggleLike(item._id)}
                style={styles.likeButton}>
                <Icon
                  name={
                    item.likes.includes(userProfile._id)
                      ? 'heart'
                      : 'heart-outline'
                  }
                  size={20}
                  color={
                    item.likes.includes(userProfile._id) ? '#ff0000' : '#888'
                  }
                />
                <Text style={styles.likeCount}>{item.likes.length}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Icon name="chevron-back-outline" size={30} color="#3498db" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chat</Text>
      </View>
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={item => item._id}
        renderItem={renderMessage}
        contentContainerStyle={styles.chatContent}
        onContentSizeChange={() =>
          flatListRef.current.scrollToEnd({animated: true})
        }
        onLayout={() => flatListRef.current.scrollToEnd({animated: true})}
        onEndReached={markMessagesAsRead}
        onEndReachedThreshold={0.1}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type a message..."
          placeholderTextColor="#666"
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Icon name="send" size={30} color="#3498db" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    marginTop: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  chatContent: {
    padding: 10,
  },
  messageContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  messageContent: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    borderRadius: 15,
    padding: 10,
  },
  username: {
    color: '#1E90FF',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  messageText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  messageTime: {
    color: '#888',
    fontSize: 12,
    marginTop: 5,
    alignSelf: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    backgroundColor: '#2A2A2A',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === 'android' ? 3 : 5,
    color: '#FFFFFF',
    marginRight: 5,
  },
  sendButton: {
    justifyContent: 'center',
  },
  unreadBanner: {
    backgroundColor: '#1E90FF',
    padding: 5,
    marginVertical: 10,
    borderRadius: 5,
  },
  unreadBannerText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
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
    color: '#888',
    fontSize: 12,
    marginLeft: 5,
  },
});

export default GeneralChatScreen;
