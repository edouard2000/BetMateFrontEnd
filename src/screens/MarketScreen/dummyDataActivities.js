const dummyDataActivities = [
  {
    id: '1',
    name: 'Activity 1',
    price: '100.00',
    sellingPrice: '120.00',
    recentChange: '+10%',
    imageUrl: 'https://via.placeholder.com/150',
    isIncrease: true,
    demand: 'High',
    priceHistory: [5, 10, 40, 60, 90, 100, 105, 110, 101, 102, 103, 104, 105, 106],
  },
  {
    id: '2',
    name: 'Activity 2',
    price: '200.00',
    sellingPrice: '180.00',
    recentChange: '-5%',
    imageUrl: 'https://via.placeholder.com/150',
    isIncrease: false,
    demand: 'Medium',
    priceHistory: [10, 40, 50, 200, 190, 180, 175],
  },
];

export default dummyDataActivities;
