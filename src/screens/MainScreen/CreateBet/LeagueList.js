// components/LeagueList.js
import React from 'react';
import {ScrollView} from 'react-native';
import LeagueItem from './LeagueItem';

const LeagueList = ({leagues, navigation}) => {
  return (
    <ScrollView>
      {leagues.map((league, index) => (
        <LeagueItem key={index} league={league} navigation={navigation} />
      ))}
    </ScrollView>
  );
};

export default LeagueList;
