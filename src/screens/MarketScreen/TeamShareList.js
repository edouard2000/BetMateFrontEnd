import React from 'react';
import ShareList from './ShareList';
import dummyDataTeams from './dummyDataTeams';

const TeamShareList = ({navigation}) => {
  const renderItemDetail = item => {
    navigation.navigate('ShareDetailScreen', {item, type: 'team'});
  };

  return (
    <ShareList
      data={dummyDataTeams}
      renderItemDetail={renderItemDetail}
      type="team"
    />
  );
};

export default TeamShareList;
