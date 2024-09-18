import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BusCard = ({ source_city, destination_city, navigation, bus_name, type, price, seat, star, start_time, end_time, duration }) => {

  return (
    <TouchableOpacity 
      onPress={() => navigation.navigate('BookSeat')}
      style={styles.touchableContainer}
      activeOpacity={0.9}
    >
      <View style={styles.container}>
        <Image
          source={require("../assets/bus.jpg")}
          style={styles.busImage}
        />

        <View style={styles.detailsContainer}>
          <Text style={styles.busType}>{bus_name}</Text>
          <Text style={styles.busDetails}>{type}</Text>
        </View>

        <View style={styles.row}>
           {/*<View style={[styles.cityContainer, isSourceCityLong && styles.cityContainerLong]}>
            <Text style={styles.city}>{source_city}</Text>
            {isSourceCityLong ? (
              <Text style={styles.city}>{destination_city}</Text>
            ) : (
              <Text style={styles.city}> - {destination_city}</Text>
            )} 
          </View>*/} 
          <Text style={styles.timeRange}>{start_time} - {end_time}</Text>
          <Text style={styles.duration}>{duration} • {seat} Seat</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.price}>₹ {price} Onwards</Text>         
        </View>

        {/* <View style={styles.changeButton}>
        <Image
         source={require("../assets/bus-icon.png")}
         style={styles.busicon} />
          <Text style={styles.changeButtonText}>Book Now</Text>
        </View> */}

        <Image 
          source={require("../assets/heart.png")}
          style={styles.heartImage}
        />

        <View style={styles.rating}>
          <Text style={styles.ratingText}>{star}</Text>
          <Ionicons name="star" size={18} color="#ffcc00" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    marginHorizontal: 10,
    marginTop: 4,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 2,
    position: 'relative',
  },
  heartImage: {
    height: 20,
    width: 20,
    position: "absolute",
    bottom: 5,
    right: 30,
  },
  busImage: {
    width: 120,
    height: 100,
    position: 'absolute',
    top: 10,
    right: 10,
    borderRadius: 10,
  },
  detailsContainer: {
    marginBottom: 10,
  },
  busType: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  busicon:{
    height:15,
    width:15,
    tintColor:"black"
  },
  busDetails: {
    fontSize: 14,
    color: '#777',
  },
  row: {
    marginBottom: 4,
  },
  cityContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  cityContainerLong: {
    flexDirection: 'column',
  },
  city: {
    fontSize: 16,
    fontWeight: "bold",
  },
  timeRange: {
    fontSize: 14,
    color: '#999',
  },
  duration: {
    fontSize: 14,
    color: '#999',
  },
  changeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: '#FA8048',
    alignSelf: 'flex-start',
  },
  changeButtonText: {
    marginLeft: 5,
    fontWeight:"bold",
    fontSize: 16,
    color: 'white',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#F62727',
  },
  rating: {
    flexDirection: 'row',
    position: "absolute",
    bottom: 6,
    right: 70,
  },
  ratingText: {
    color: '#007AFF',
    marginRight: 5,
    fontWeight: 'bold',
  },
});

export default BusCard;
