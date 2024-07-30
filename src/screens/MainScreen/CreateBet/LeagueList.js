import React from 'react';
import { ScrollView } from 'react-native';
import LeagueItem from './LeagueItem';

const LeagueList = ({ leagues, navigation, betId, mode }) => {
  return (
    <ScrollView>
      {leagues.map((league, index) => (
        <LeagueItem
          key={league._id}
          league={league}
          navigation={navigation}
          betId={betId} 
          mode={mode}
        />
      ))}
    </ScrollView>
  );
};

export default LeagueList;
