const dummyData = [
  {
    id: 1,
    user: 'User 1',
    avatar:
      'https://ui-avatars.com/api/?name=User+1&background=random&size=128',
    subscribers: 120,
    bio: 'Expert in soccer predictions',
    predictions: [
      {
        id: 1,
        game: 'Team A vs Team B',
        prediction: 'Team A will win',
        notes:
          'Based on recent performance, Team A is expected to dominate the game due to their superior form and home advantage.',
        likes: 10,
        comments: 5,
        date: '2024-06-01',
        time: '13:00',
        percentages: {
          team1: 60,
          draw: 20,
          team2: 20,
        },
        status: 'Success',
      },
      {
        id: 2,
        game: 'Team C vs Team D',
        prediction: 'Team D will lose',
        notes: 'Key player injury has significantly weakened Team D.',
        likes: 8,
        comments: 3,
        date: '2024-06-02',
        time: '16:00',
        percentages: {
          team1: 10,
          draw: 30,
          team2: 50,
        },
        status: 'Pending',
      },
    ],
  },
  {
    id: 2,
    user: 'User 2',
    avatar:
      'https://ui-avatars.com/api/?name=User+2&background=random&size=128',
    subscribers: 200,
    bio: 'Basketball prediction specialist',
    predictions: [
      {
        id: 1,
        game: 'Team E vs Team F',
        prediction: 'Team E will win',
        notes:
          'Strong home record makes Team E the favorite to win this fixture.',
        likes: 15,
        comments: 7,
        date: '2024-06-03',
        time: '14:00',
        percentages: {
          team1: 55,
          draw: 25,
          team2: 20,
        },
        status: 'Failed',
      },
      {
        id: 2,
        game: 'Team G vs Team H',
        prediction: 'Team H will lose',
        notes: 'Recent losing streak suggests Team H is unlikely to win.',
        likes: 12,
        comments: 4,
        date: '2024-06-04',
        time: '18:00',
        percentages: {
          team1: 45,
          draw: 35,
          team2: 20,
        },
        status: 'Pending',
      },
      {
        id: 3,
        game: 'Team I vs Team J',
        prediction: 'Team I will win',
        notes:
          'Team I has a strong home record and a good performance in the league.',
        likes: 18,
        comments: 6,
        date: '2024-06-05',
        time: '15:00',
        percentages: {
          team1: 60,
          draw: 20,
          team2: 20,
        },
        status: 'Success',
      },
    ],
  },
];

export default dummyData;
