import React, {useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import BetSavedCard from './BetSavedCard';
import styles from './styles';
import {fetchBetsByUser} from '../../../redux/slices/getBetSlice';

const SavedBetsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const unpublishedBets = useSelector(state => state.bets.unpublishedBets);
  const loading = useSelector(state => state.bets.loading);
  const error = useSelector(state => state.bets.error);
  const userId = useSelector(state => state.auth.user._id);

  useEffect(() => {
    if (userId) {
      dispatch(fetchBetsByUser(userId));
    }
  }, [dispatch, userId]);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {unpublishedBets.map((bet, index) => (
          <BetSavedCard
            key={bet._id}
            bet={bet}
            onCardPress={() =>
              navigation.navigate('FixtureDetailScreen', {bet})
            }
            isLast={index === unpublishedBets.length - 1}
          />
        ))}
      </ScrollView>
      <View style={styles.bottomNav}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.navButton}>
          <Text style={styles.navButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.navButton}>
          <Text style={styles.navButtonText}>Create Bet</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SavedBetsScreen;
