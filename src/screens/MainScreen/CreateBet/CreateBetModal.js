// components/CreateBetModal.js
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const CreateBetModal = ({visible, onClose}) => {
  const navigation = useNavigation();
  const [step, setStep] = useState(1);
  const [betName, setBetName] = useState('');
  const [balance, setBalance] = useState('');

  const handleNext = () => {
    if (step === 1 && betName) {
      setStep(2);
    } else if (step === 2 && balance) {
      navigation.navigate('AddFixtureScreen', {betName, balance});
      onClose();
    } else {
      alert('Please fill in all fields.');
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      onClose();
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Create Bet</Text>
          {step === 1 && (
            <TextInput
              placeholder="Bet Name"
              placeholderTextColor="#AAAAAA"
              style={styles.input}
              value={betName}
              onChangeText={setBetName}
            />
          )}
          {step === 2 && (
            <TextInput
              placeholder="Balance to Allocate"
              placeholderTextColor="#AAAAAA"
              style={styles.input}
              value={balance}
              onChangeText={setBalance}
              keyboardType="numeric"
            />
          )}
          <View style={step > 1 ? styles.buttonContainer : styles.buttonSingle}>
            {step > 1 && (
              <TouchableOpacity style={styles.button} onPress={handleBack}>
                <Text style={styles.buttonText}>Back</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity style={styles.button} onPress={handleNext}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Icon name="close-outline" size={30} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#151515',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#3498db',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingLeft: 20,
    color: '#FFFFFF',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonSingle: {
    alignItems: 'center',
    width: '100%',
  },
  button: {
    backgroundColor: 'rgba(52, 152, 219, 0.3)',
    paddingVertical: 10,
    borderRadius: 25,
    marginTop: 10,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default CreateBetModal;
