// 

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import io from 'socket.io-client';

const socket = io('http://192.168.60.51:5001');

const GeneralChatScreen = () => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');

    useEffect(() => {
        socket.on('NEW_GLOBAL_MESSAGE', (data) => {
            setMessages((prevMessages) => [...prevMessages, data.data]);
        });

        socket.emit('fetchMessages');
        socket.on('messages', (data) => {
            setMessages(data.data);
        });

        return () => {
            socket.off('NEW_GLOBAL_MESSAGE');
            socket.off('messages');
        };
    }, []);

    const sendMessage = async () => {
        if (inputText.trim()) {
            socket.emit('sendMessage', { userId: '667686b8cafc558ed66a811a', message: inputText });
            setInputText('');
        }
    };

    const renderMessage = ({ item }) => (
        <View style={[styles.messageContainer, { alignSelf: item.userId === '66768003bc6550fbf2a04d06' ? 'flex-end' : 'flex-start' }]}>
            <Text style={styles.messageText}>{item.message}</Text>
            <Text style={styles.messageTime}>{new Date(item.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={messages}
                keyExtractor={(item) => item._id}
                renderItem={renderMessage}
                contentContainerStyle={styles.chatContent}
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
    chatContent: {
        padding: 10,
    },
    messageContainer: {
        maxWidth: '80%',
        backgroundColor: '#1E1E1E',
        borderRadius: 15,
        padding: 10,
        marginBottom: 10,
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
});

export default GeneralChatScreen;