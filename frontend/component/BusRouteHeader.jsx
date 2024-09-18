import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MyContext } from '../contextApi/AllApi';


const BusRouteHeader = ({ navigation }) => {
    const { AllBusData } = useContext(MyContext);
  
    // Use default values if AllBusData is empty or undefined
    const firstBus = AllBusData[0] || {};
    const { source_city = 'N/A', destination_city = 'N/A' } = firstBus;
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
    const formattedDay = today.toLocaleDateString('en-GB', { weekday: 'short' });
  
    return (
      <View style={styles.container}>
        <View style={styles.leftSection}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <View style={styles.routeInfo}>
            <Text style={styles.locationText}>{source_city} →</Text>
            <Text style={styles.locationText}> {destination_city}</Text>
            <Text style={styles.busCount}>{AllBusData.length > 0 ? `${AllBusData.length} Buses` : 'No buses found'}</Text>
          </View>
        </View>
  
        <View style={styles.rightSection}>
          <Text style={styles.dateText}>{formattedDate}</Text>
          <Text style={styles.dayText}>{formattedDay}</Text>
        </View>
      </View>
    );
  };

  
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 40,
        backgroundColor: '#fff',
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButton: {
        marginLeft: 15,
    },
    routeInfo: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 16,
    },
    locationText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 2,
    },
    busCount: {
        fontSize: 14,
        color: '#6c757d',
        marginTop: 4,
        marginHorizontal: 10,
    },
    rightSection: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        marginHorizontal: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dateText: {
        fontSize: 14,
        borderRadius: 20,
        backgroundColor: '#fde2e2',
        padding: 8,
        fontWeight: 'bold',
        color: '#000',
    },
    dayText: {
        fontSize: 14,
    },
});

export default BusRouteHeader;
