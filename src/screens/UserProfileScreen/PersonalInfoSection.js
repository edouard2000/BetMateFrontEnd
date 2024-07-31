import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import personalInfoStyles from './PersonalInfoSectionStyles';

const PersonalInfoSection = ({ user, navigation }) => {
  return (
    <View style={personalInfoStyles.section}>
      <View style={personalInfoStyles.sectionTitleContainer}>
        <Text style={personalInfoStyles.sectionTitle}>Personal Information</Text>
        <TouchableOpacity onPress={() => navigation.navigate('EditPersonalInfo')}>
          <Text style={personalInfoStyles.editText}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={personalInfoStyles.sectionContent}>
        <View style={personalInfoStyles.infoRow}>
          <View style={personalInfoStyles.iconColumn}>
            <Icon name="person-outline" size={20} color="#1E88E5" />
          </View>
          <View style={personalInfoStyles.infoLabelColumn}>
            <Text style={personalInfoStyles.infoLabel}>Name:</Text>
          </View>
          <View style={personalInfoStyles.infoValueColumn}>
            <Text style={personalInfoStyles.infoValue}>{user.name}</Text>
          </View>
          <View style={personalInfoStyles.verifyColumn}></View>
        </View>
        <View style={personalInfoStyles.infoRow}>
          <View style={personalInfoStyles.iconColumn}>
            <Icon name="mail-outline" size={20} color="#1E88E5" />
          </View>
          <View style={personalInfoStyles.infoLabelColumn}>
            <Text style={personalInfoStyles.infoLabel}>Email:</Text>
          </View>
          <View style={personalInfoStyles.infoValueColumn}>
            <Text style={personalInfoStyles.infoValue}>{user.email}</Text>
          </View>
          <View style={personalInfoStyles.verifyColumn}>
            {user.isEmailVerified ? (
              <Text style={personalInfoStyles.verifyText}>Verified</Text>
            ) : (
              <TouchableOpacity>
                <Text style={personalInfoStyles.verifyButton}>Verify</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={personalInfoStyles.infoRow}>
          <View style={personalInfoStyles.iconColumn}>
            <Icon name="call-outline" size={20} color="#1E88E5" />
          </View>
          <View style={personalInfoStyles.infoLabelColumn}>
            <Text style={personalInfoStyles.infoLabel}>Phone:</Text>
          </View>
          <View style={personalInfoStyles.infoValueColumn}>
            <Text style={personalInfoStyles.infoValue}>{user.phoneNumber}</Text>
          </View>
          <View style={personalInfoStyles.verifyColumn}></View>
        </View>
      </View>
    </View>
  );
};

export default PersonalInfoSection;
