import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import icons for better visuals

// Data for the profile page
const profileData = [
  { id: '1', title: 'Name', value: 'John Doe', icon: 'person-outline' },
  { id: '2', title: 'Email', value: 'johndoe@example.com', icon: 'mail-outline' },
  { id: '3', title: 'Today\'s Date', value: new Date().toLocaleDateString(), icon: 'calendar-outline' },
  { id: '4', title: 'Total Trips', value: '12', icon: 'bus-outline' },
  { id: '5', title: 'Payment Details', value: 'Visa **** 1234', icon: 'card-outline' },
  { id: '6', title: 'Country', value: 'United States', icon: 'globe-outline' },
  { id: '7', title: 'Language', value: 'English', icon: 'language-outline' },
];

// Profile Item Component
const ProfileItem = ({ title, value, icon }) => (
  <View style={styles.itemContainer}>
    <Ionicons name={icon} size={24} color="#4CAF50" style={styles.icon} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  </View>
);

const ProfilePage = () => {
  return (
    <View style={styles.container}>
      {/* Profile Picture Section */}
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }}
          style={styles.profilePicture}
        />
        <Text style={styles.profileName}>John Doe</Text>
      </View>

      {/* Profile Details List */}
      <FlatList
        data={profileData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ProfileItem title={item.title} value={item.value} icon={item.icon} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f4f8',
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#4CAF50',
    borderWidth: 3,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  flatListContent: {
    paddingBottom: 30,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Adds depth with shadow
  },
  icon: {
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  value: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
});

export default ProfilePage;
