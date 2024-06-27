import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const generateAvatarUrl = name => {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name,
  )}&background=random&size=128`;
};

const Chat = () => {
  const [messages, setMessages] = useState([
    {id: '1', text: 'This is an awesome bet!', likes: 2, sender: 'Alice'},
    {id: '2', text: 'I agree! So excited!', likes: 3, sender: 'Bob'},
  ]);
  const [input, setInput] = useState('');
  const navigation = useNavigation();
  const flatListRef = useRef();

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {});
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {});

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  useEffect(() => {
    scrollToEnd();
  }, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      const newMessage = {
        id: (messages.length + 1).toString(),
        text: input,
        likes: 0,
        sender: 'You',
      };
      setMessages([...messages, newMessage]);
      setInput('');
      scrollToEnd();
    }
  };

  const handleLike = id => {
    setMessages(prevMessages =>
      prevMessages.map(msg =>
        msg.id === id ? {...msg, likes: msg.likes + 1} : msg,
      ),
    );
  };

  const handleKeyPress = e => {
    if (e.nativeEvent.key === 'Enter') {
      handleSend();
    }
  };

  const scrollToEnd = () => {
    flatListRef.current?.scrollToEnd({animated: true});
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-outline" size={25} color="#FFF" />
        </TouchableOpacity>
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.mainContainer}>
          <FlatList
            ref={flatListRef}
            data={messages}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={styles.messageContainer}>
                <Image
                  source={{uri: generateAvatarUrl(item.sender)}}
                  style={styles.avatar}
                />
                <View style={styles.messageContent}>
                  <Text style={styles.messageText}>{item.text}</Text>
                  <View style={styles.messageFooter}>
                    <TouchableOpacity
                      style={styles.likeButton}
                      onPress={() => handleLike(item.id)}>
                      <Icon name="heart" size={20} color="#FF0000" />
                      <Text style={styles.likeCount}>{item.likes}</Text>
                    </TouchableOpacity>
                    <Text style={styles.senderName}>{item.sender}</Text>
                  </View>
                </View>
              </View>
            )}
            contentContainerStyle={styles.messagesList}
            onContentSizeChange={() => scrollToEnd()}
          />
          <KeyboardAvoidingView
            style={styles.keyboardContainer}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={90}>
            <View style={styles.inputWrapper}>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  value={input}
                  onChangeText={setInput}
                  placeholder="Type a message..."
                  placeholderTextColor="#888"
                  onKeyPress={handleKeyPress}
                  autoFocus={true}
                />
                <TouchableOpacity onPress={handleSend}>
                  <Icon name="send" size={24} color="#3498db" />
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Chat;
