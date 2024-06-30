import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import PredictionsScreen from '../PredictionsScreen';
import Rebet from '../Rebet';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './SocialScreenStyles';

const SocialScreen = ({navigation}) => {
  const [activeScreen, setActiveScreen] = useState('predictions');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navContainer}>
        <TouchableOpacity
          onPress={() => setActiveScreen('predictions')}
          style={[
            styles.navButton,
            activeScreen === 'predictions' && styles.activeNavButton,
          ]}>
          <Text
            style={[
              styles.navText,
              activeScreen === 'predictions' && styles.activeNavText,
            ]}>
            Predictions
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveScreen('myBets')}
          style={[
            styles.navButton,
            activeScreen === 'myBets' && styles.activeNavButton,
          ]}>
          <Text
            style={[
              styles.navText,
              activeScreen === 'myBets' && styles.activeNavText,
            ]}>
            Rebet
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <Icon name="search-outline" size={20} color="#1E88E5" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#AAAAAA"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <View style={styles.contentContainer}>
        {activeScreen === 'predictions' ? (
          <PredictionsScreen />
        ) : (
          <Rebet navigation={navigation} />
        )}
      </View>
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-undo-outline" size={25} color="#1E88E5" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SocialScreen;
