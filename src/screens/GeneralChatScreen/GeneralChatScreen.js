import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import io from 'socket.io-client';
import generateAvatarUrl from '../../utils/generateAvatarUrl';
import {useUnreadMessage} from '../../context/UnreadMessageContext';

const socket = io('https://betmatebackend.onrender.com/');

const GeneralChatScreen = ({navigation}) => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const {setUnreadCount, unreadCount} = useUnreadMessage();
  const flatListRef = useRef(null);

  useEffect(() => {
    socket.on('NEW_GLOBAL_MESSAGE', data => {
      setMessages(prevMessages => [...prevMessages, data.data]);
      // Check if the message was sent by another user
      if (data.data.userId !== '66768003bc6550fbf2a04d06') {
        setUnreadCount(prevCount => prevCount + 1);
      }
    });

    socket.emit('fetchMessages');
    socket.on('messages', data => {
      setMessages(data.data);
      // Replace '66768003bc6550fbf2a04d06' with actual userId
      const unreadMessages = data.data.filter(
        msg => !msg.readBy.includes('66768003bc6550fbf2a04d06'),
      );
      setUnreadCount(unreadMessages.length);
    });

    return () => {
      socket.off('NEW_GLOBAL_MESSAGE');
      socket.off('messages');
    };
  }, []);

  useEffect(() => {
    if (unreadCount > 0 && flatListRef.current) {
      flatListRef.current.scrollToEnd({animated: true});
    }
  }, [unreadCount]);

  const sendMessage = async () => {
    if (inputText.trim()) {
      socket.emit('sendMessage', {
        userId: '667686b8cafc558ed66a811a',
        message: inputText,
      });
      setInputText('');
    }
  };

  const markMessagesAsRead = () => {
    const unreadMessageIds = messages
      .filter(msg => !msg.readBy.includes('66768003bc6550fbf2a04d06'))
      .map(msg => msg._id);

    if (unreadMessageIds.length > 0) {
      socket.emit('markAsRead', {
        userId: '66768003bc6550fbf2a04d06',
        messageIds: unreadMessageIds,
      });
      setUnreadCount(0);
    }
  };

  const renderMessage = ({item, index}) => {
    const isFirstUnread = index === messages.length - unreadCount;
    return (
      <>
        {isFirstUnread && (
          <View style={styles.unreadBanner}>
            <Text style={styles.unreadBannerText}>New Messages</Text>
          </View>
        )}
        <View style={styles.messageContainer}>
          <Image
            source={{uri: item.avatar || generateAvatarUrl(item.id)}}
            style={styles.avatar}
          />
          <View style={styles.messageContent}>
            <Text style={styles.username}>{item.id || 'Anonymous'}</Text>
            <Text style={styles.messageText}>{item.message}</Text>
            <Text style={styles.messageTime}>
              {new Date(item.createdAt).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </Text>
          </View>
        </View>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>General Chat</Text>
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
          <Icon name="send" size={24} color="#1E90FF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#1E1E1E',
  },
  backButton: {
    padding: 10,
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
    padding: 10,
    backgroundColor: '#1E1E1E',
  },
  input: {
    flex: 1,
    backgroundColor: '#2A2A2A',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: '#FFFFFF',
    marginRight: 10,
  },
  sendButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#2A2A2A',
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
});

export default GeneralChatScreen;
