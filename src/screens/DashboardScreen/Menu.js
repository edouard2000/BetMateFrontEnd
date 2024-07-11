import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';

const Menu = ({isMenuVisible, toggleMenu}) => {
  return (
    <Modal
      visible={isMenuVisible}
      transparent={true}
      animationType="fade"
      onRequestClose={toggleMenu}>
      <TouchableWithoutFeedback onPress={toggleMenu}>
        <View style={styles.overlay}>
          <View style={styles.menu}>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => alert('Bets')}>
              <Text style={styles.menuItemText}>Bets</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => alert('Prediction')}>
              <Text style={styles.menuItemText}>Prediction</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => alert('Betting')}>
              <Text style={styles.menuItemText}>Betting</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  menu: {
    backgroundColor: '#000000',
    padding: 10,
    width: '100%',
    borderRadius: 5,
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  menuItem: {
    paddingVertical: 3,
    paddingHorizontal: 15,
    backgroundColor: '#1E88E5',
    borderRadius: 5,
  },
  menuItemText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
});

export default Menu;
