import React, {useState} from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import customizeOddsStyles from './customizeOddsStyles';

const CustomizeOddsScreen = ({route, navigation}) => {
  const {odds} = route.params;
  const [customOdds, setCustomOdds] = useState(odds);

  const handleSave = () => {
    // Handle save action
    console.log('Odds saved:', customOdds);
    navigation.goBack();
  };

  const handleChange = (type, newValue) => {
    const newOdds = {...customOdds, [type]: newValue};
    setCustomOdds(newOdds);
  };

  return (
    <SafeAreaView style={customizeOddsStyles.container}>
      <FlatList
        data={Object.keys(customOdds)}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <View style={customizeOddsStyles.oddsItem}>
            <Text style={customizeOddsStyles.oddsLabel}>{item}</Text>
            <TextInput
              style={customizeOddsStyles.oddsValue}
              value={customOdds[item]}
              onChangeText={newValue => handleChange(item, newValue)}
              keyboardType="numeric"
            />
          </View>
        )}
        ItemSeparatorComponent={() => (
          <View style={{height: 1, backgroundColor: '#0D0D0D'}} />
        )}
      />
      <View style={customizeOddsStyles.bottomNav}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={customizeOddsStyles.navButton}>
          <Text style={customizeOddsStyles.navButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSave}
          style={customizeOddsStyles.saveButton}>
          <Text style={customizeOddsStyles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CustomizeOddsScreen;
