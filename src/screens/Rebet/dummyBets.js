const dummyBets = [
    {
      user: 'John Doe',
      avatar:
        'https://ui-avatars.com/api/?name=John+Doe&background=random&size=128',
      status: 'Won',
      betAmount: 50,
      time: '2024-06-01T12:00:00Z',
      rebetCount: 10,
      games: [
        {
          game: 'Team A vs Team B',
          betTerm: '1',
          odds: {team1: 2.5, draw: 3.2, team2: 2.8},
          gameTime: '2024-06-01T15:00:00Z',
          currentStatus: 'Completed',
        },
        {
          game: 'Team C vs Team D',
          betTerm: 'X',
          odds: {team1: 1.5, draw: 2.5, team2: 3.0},
          gameTime: '2024-06-01T17:00:00Z',
          currentStatus: 'Won',
        },
      ],
    },
    {
      user: 'Jane Smith',
      avatar:
        'https://ui-avatars.com/api/?name=Jane+Smith&background=random&size=128',
      status: 'Lost',
      betAmount: 30,
      time: '2024-06-01T14:00:00Z',
      rebetCount: 5,
      games: [
        {
          game: 'Team E vs Team F',
          betTerm: 'Over',
          odds: {team1: 1.8, draw: 3.5, team2: 2.2},
          gameTime: '2024-06-01T18:00:00Z',
          currentStatus: 'Pending',
        },
      ],
    },
  ];


  export default dummyBets;