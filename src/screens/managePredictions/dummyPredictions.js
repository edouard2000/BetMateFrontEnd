const dummyPredictions = [
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
  {
    id: 3,
    game: 'Team E vs Team F',
    prediction: 'Team F will win',
    notes:
      'Based on recent performance, Team F is expected to dominate the game due to their superior form and home advantage.',
    likes: 15,
    comments: 7,
    date: '2024-06-03',
    time: '19:00',
    percentages: {
      team1: 70,
      draw: 15,
      team2: 15,
    },
    status: 'Failed',
  }
];

export default dummyPredictions;
