import generateAvatarUrl from '../../utils/generateAvatarUrl';

const dummyUser = {
  name: 'John Doe',
  username: 'johndoe123',
  email: 'john.doe@example.com',
  phone: '+1234567890',
  profilePicture: generateAvatarUrl('John Doe'),
  paymentPhoneNumber: '+1234567890',
  paymentCard: '**** **** **** 1234',
  primaryPaymentMethod: 'Card',
  about:
    'This is a dummy user profile for John Doe. He is an avid sports enthusiast and loves to place bets on various games.',
  dateJoined: 'Joined: January 1, 2020',
  Scores: 300,
  following: 350,
  followers: 500,
  mateCash: '$168.68',
  mateCoins: '1500',
};

export default dummyUser;
