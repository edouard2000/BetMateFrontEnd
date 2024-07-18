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
import {useNavigation, useRoute} from '@react-navigation/native';

const CreateBetModal = ({visible, onClose}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const mode = route.params?.mode || 'bet';

  const [step, setStep] = useState(1);
  const [betName, setBetName] = useState('');
  const [balance, setBalance] = useState('');

  const handleNext = () => {
    if (step === 1 && betName) {
      setStep(2);
    } else if (step === 2 && balance) {
      navigation.navigate('AddFixtureScreen', {betName, balance, mode});
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
          <View style={styles.titleContainer}>
            <Text style={styles.modalTitle}>Create Bet</Text>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Icon name="close-outline" size={30} color="#3498db" />
            </TouchableOpacity>
          </View>
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
          <View style={styles.progressContainer}>
            <View
              style={[styles.progressStep, step >= 1 && styles.progressActive]}
            />
            <View
              style={[styles.progressStep, step >= 2 && styles.progressActive]}
            />
          </View>
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
    backgroundColor: '#161616',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3498db',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#3498db',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingLeft: 15,
    color: '#FFFFFF',
    backgroundColor: '#161616',
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  progressStep: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#555',
    marginHorizontal: 5,
  },
  progressActive: {
    backgroundColor: '#3498db',
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
    backgroundColor: '#3498db',
    paddingVertical: 3,
    borderRadius: 25,
    width: '35%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  closeButton: {
    marginHorizontal: 5,
  },
});

export default CreateBetModal;
