export const getResultIcon = percentages => {
  if (
    percentages.team1 > percentages.draw &&
    percentages.team1 > percentages.team2
  ) {
    return {result: '1', color: '#1E88E5'};
  } else if (
    percentages.draw > percentages.team1 &&
    percentages.draw > percentages.team2
  ) {
    return {result: 'X', color: '#F39C12'};
  } else {
    return {result: '2', color: '#E74C3C'};
  }
};

export const getBarColor = (value, percentages) => {
  if (value > percentages.draw && value > percentages.team2) {
    return '#1E88E5';
  } else if (value > percentages.team1 && value > percentages.team2) {
    return '#F39C12';
  } else if (value > percentages.team1 && value > percentages.draw) {
    return '#E74C3C';
  } else {
    return '#E0E0E0';
  }
};

export const getStatusColor = status => {
  switch (status) {
    case 'Success':
      return '#4CAF50';
    case 'Failed':
      return '#E74C3C';
    case 'Pending':
      return '#1E88E5';
    default:
      return '#E0E0E0';
  }
};

export const truncateNotes = (notes, length) => {
  if (notes.length > length) {
    return notes.substring(0, length) + '...';
  }
  return notes;
};
