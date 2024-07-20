const dummyData = [
  {
    id: '1',
    name: 'Stock 1',
    shareValue: '500.54',
    recentChange: '+9.75%',
    imageUrl: 'https://via.placeholder.com/150',
    isIncrease: true,
    originalPrice: '450.00',
    value: '500.54',
    shares: 10,
    availableShares: 5,
    demand: 'high',
    player: {
      name: 'Player 1',
      league: 'Premier League',
      rating: 'A',
    },
  },
  {
    id: '2',
    name: 'Stock 2',
    shareValue: '723.45',
    recentChange: '-6.85%',
    imageUrl: 'https://via.placeholder.com/150',
    isIncrease: false,
    originalPrice: '800.00',
    value: '723.45',
    shares: 20,
    availableShares: 10,
    demand: 'medium',
    player: {
      name: 'Player 2',
      league: 'La Liga',
      rating: 'B',
    },
  },
  // ... more stocks
];

export default dummyData;
