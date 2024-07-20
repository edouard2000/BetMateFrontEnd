import generateAvatarUrl from '../../utils/generateAvatarUrl';

const bets = [
  {
    id: '1',
    name: 'Champions',
    owner: 'John Doe',
    avatar: generateAvatarUrl('Champions'),
    league: 'Premier League',
    leagueIcon: generateAvatarUrl('Premier League'),
    teams: 'Liverpool vs. Man United',
    time: '19:00',
    multipliers: {teamA: '1.5', draw: '2', teamB: '2.8'},
    balance: 500,
    totalBalance: 1000,
    isFull: false,
    details: [
      '1: Liverpool win *1.5',
      '2: Draw *2',
      '3: Man United win *2.8',
      '4: Over 2.5 Goals *1.8',
      '5: Under 2.5 Goals *1.8',
    ],
    teamAIcon: generateAvatarUrl('Liverpool'),
    teamBIcon: generateAvatarUrl('Man United'),
  },
];

export default bets;
