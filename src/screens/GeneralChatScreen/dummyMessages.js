const dummyMessages = [
  {
    _id: 'message1',
    userId: 'user2',
    senderName: 'Jane Smith',
    avatar: 'https://www.example.com/avatar2.jpg',
    message: 'Hello everyone!',
    createdAt: new Date().toISOString(),
    likes: [],
    readBy: [],
  },
  {
    _id: 'message2',
    userId: 'user1',
    senderName: 'John Doe',
    avatar: 'https://www.example.com/avatar.jpg',
    message: 'Hi Jane!',
    createdAt: new Date().toISOString(),
    likes: [],
    readBy: [],
  },
];

export default dummyMessages;
