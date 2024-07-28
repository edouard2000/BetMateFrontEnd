import React from 'react';
import {ScrollView} from 'react-native';
import LeagueItem from './LeagueItem';

const LeagueList = ({leagues, navigation, addTeamToBet, mode}) => {
  return (
    <ScrollView>
      {leagues.map((league, index) => (
        <LeagueItem
          key={league._id}
          league={league}
          navigation={navigation}
          addTeamToBet={addTeamToBet}
          mode={mode}
        />
      ))}
    </ScrollView>
  );
};

export default LeagueList;
