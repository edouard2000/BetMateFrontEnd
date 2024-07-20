import React from 'react';
import ShareList from './ShareList';
import dummyPlayerData from './dummyPlayerData';

const PlayerShareList = ({navigation}) => {
  const renderItemDetail = item => {
    navigation.navigate('ShareDetailScreen', {item, type: 'player'});
  };

  return (
    <ShareList
      data={dummyPlayerData}
      renderItemDetail={renderItemDetail}
      type="player"
    />
  );
};

export default PlayerShareList;
