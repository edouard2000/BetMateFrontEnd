// components/LeagueList.js
import React from 'react';
import {ScrollView} from 'react-native';
import LeagueItem from './LeagueItem';

const LeagueList = ({
  leagues,
  navigation,
  betName,
  balance,
  teamCount,
  addTeamToBet,
}) => {
  return (
    <ScrollView>
      {leagues.map((league, index) => (
        <LeagueItem
          key={index}
          league={league}
          navigation={navigation}
          betName={betName}
          balance={balance}
          teamCount={teamCount}
          addTeamToBet={addTeamToBet}
        />
      ))}
    </ScrollView>
  );
};

export default LeagueList;
