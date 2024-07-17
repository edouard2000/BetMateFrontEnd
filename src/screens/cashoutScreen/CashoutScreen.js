import React, {useState} from 'react';
import {View, ScrollView, SafeAreaView} from 'react-native';
import {dummySentRequests, dummyReceivedRequests} from './dummyRequests';
import RequestItem from './RequestItem';
import FilterButton from './FilterButton';
import FooterNav from './FooterNav';
import styles from './Styles';

const CashoutScreen = ({
  sentRequests = dummySentRequests,
  receivedRequests = dummyReceivedRequests,
  onAccept,
  onReject,
  onEdit,
  onMore,
  navigation,
}) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [requestType, setRequestType] = useState('sent');

  const filteredRequests = () => {
    const requests = requestType === 'sent' ? sentRequests : receivedRequests;
    if (activeFilter === 'all') {
      return requests;
    } else if (activeFilter === 'pending') {
      return requests.filter(req => !req.isCompleted);
    } else if (activeFilter === 'completed') {
      return requests.filter(req => req.isCompleted);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.filterContainer}>
        {['all', 'pending', 'completed'].map(status => (
          <FilterButton
            key={status}
            status={status}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
        ))}
      </View>
      <ScrollView style={styles.scrollView}>
        {filteredRequests().map((request, index) => (
          <RequestItem
            key={index}
            request={request}
            onAccept={onAccept}
            onReject={onReject}
            onEdit={onEdit}
            onMore={onMore}
            requestType={requestType}
          />
        ))}
      </ScrollView>
      <FooterNav
        navigation={navigation}
        requestType={requestType}
        setRequestType={setRequestType}
      />
    </SafeAreaView>
  );
};

export default CashoutScreen;
