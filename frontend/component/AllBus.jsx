import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import BusCard from './BusCard';
import { MyContext } from '../contextApi/AllApi';

const AllBus = ({ navigation }) => {
  const { AllBusData } = useContext(MyContext);

  const renderBusCard = ({ item }) => {
    const { bus_name, type, price, seat, star, start_time, end_time, duration, source_city, destination_city } = item;
    return (
      <BusCard
        navigation={navigation}
        bus_name={bus_name}
        type={type}
        price={price}
        seat={seat}
        star={star}
        start_time={start_time}
        end_time={end_time}
        duration={duration}
        source_city={source_city}
        destination_city={destination_city}
      />
    );
  };

  return (
    <View style={styles.container}>
      {AllBusData.length > 0 ? (
        <FlatList
          data={AllBusData}
          renderItem={renderBusCard}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <Text style={styles.noData}>No Buses Available for this route</Text>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});


export default AllBus;
