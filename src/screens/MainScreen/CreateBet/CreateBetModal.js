import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { fetchBetsByUser } from '../../../redux/slices/getBetSlice'; // Ensure this action is imported correctly

const CreateBetModal = ({ visible, onClose }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const userId = useSelector(state => state.auth.user?._id);

  const [betName, setBetName] = useState('');
  const [balance, setBalance] = useState('');
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleNext = async () => {
    if (step === 1 && betName) {
      setStep(2);
    } else if (step === 2 && balance) {
      if (!userId) {
        setError('User not logged in');
        return;
      }
      try {
        setLoading(true);
        await axios.post('http://localhost:5001/api/create-bet', {
          name: betName,
          amountAllocated: balance,
          userId,
        });

        // Dispatch action to fetch and update bets
        dispatch(fetchBetsByUser(userId)).then(() => {
          setLoading(false);
          navigation.navigate('SavedBetsScreen');
          onClose();
        });
      } catch (err) {
        setLoading(false);
        setError('Error creating bet');
        console.error('Error creating bet:', err);
      }
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
              onChangeText={text => setBetName(text)}
            />
          )}
          {step === 2 && (
            <TextInput
              placeholder="Balance to Allocate"
              placeholderTextColor="#AAAAAA"
              style={styles.input}
              value={balance}
              onChangeText={text => setBalance(text)}
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
              {loading ? (
                <Text style={styles.buttonText}>Loading...</Text>
              ) : (
                <Text style={styles.buttonText}>Next</Text>
              )}
            </TouchableOpacity>
          </View>
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
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
    shadowOffset: { width: 0, height: 2 },
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
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});

export default CreateBetModal;
