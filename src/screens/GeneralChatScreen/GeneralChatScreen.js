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
import generateAvatarUrl from '../../utils/generateAvatarUrl';
import dummyUser from './dummyUser';
import dummyMessages from './dummyMessages';

const GeneralChatScreen = ({navigation}) => {
  const userProfile = dummyUser;
  const [messages, setMessages] = useState(dummyMessages);
  const [inputText, setInputText] = useState('');
  const flatListRef = useRef(null);

  useEffect(() => {
    // Simulate receiving new messages
    const newMessage = {
      _id: 'newMessageId',
      userId: userProfile._id,
      senderName: userProfile.name,
      avatar: userProfile.avatar,
      message: 'Hello, this is a new message!',
      createdAt: new Date(),
      likes: [],
      readBy: [],
    };

    setMessages(prevMessages => [...prevMessages, newMessage]);
  }, []);

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({animated: true});
    }
  }, [messages]);

  const sendMessage = () => {
    if (inputText.trim()) {
      const newMessage = {
        _id: 'newMessageId',
        userId: userProfile._id,
        senderName: userProfile.name,
        avatar: userProfile.avatar,
        message: inputText,
        createdAt: new Date(),
        likes: [],
        readBy: [],
      };

      setMessages(prevMessages => [...prevMessages, newMessage]);
      setInputText('');
    }
  };

  const toggleLike = messageId => {
    setMessages(prevMessages =>
      prevMessages.map(msg =>
        msg._id === messageId
          ? {
              ...msg,
              likes: msg.likes.includes(userProfile._id)
                ? msg.likes.filter(id => id !== userProfile._id)
                : [...msg.likes, userProfile._id],
            }
          : msg,
      ),
    );
  };

  const renderMessage = ({item}) => (
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
                item.likes.includes(userProfile._id) ? 'heart' : 'heart-outline'
              }
              size={20}
              color={item.likes.includes(userProfile._id) ? '#ff0000' : '#888'}
            />
            <Text style={styles.likeCount}>{item.likes.length}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

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
    paddingVertical: 5,
    color: '#FFFFFF',
    marginRight: 5,
  },
  sendButton: {
    justifyContent: 'center',
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
