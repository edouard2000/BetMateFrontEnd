import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Switch} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Menu from './Menu';

const Header = ({isScoreSectionVisible, setIsScoreSectionVisible}) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
        <Icon name="menu" size={30} color="#1E88E5" />
      </TouchableOpacity>
      <Menu isMenuVisible={isMenuVisible} toggleMenu={toggleMenu} />
      <Switch
        value={isScoreSectionVisible}
        onValueChange={value => setIsScoreSectionVisible(value)}
        style={styles.switch}
        thumbColor="white"
        trackColor={{false: '#767577', true: '#1E88E5'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#000000',
  },
  menuButton: {
    padding: 10,
  },
  switch: {
    transform: [
      {scaleX: Platform.OS === 'android' ? 0.9 : 0.6},
      {scaleY: Platform.OS === 'android' ? 0.9 : 0.6},
    ],
  },
});

export default Header;
