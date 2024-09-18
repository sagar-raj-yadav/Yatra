import React, { useEffect, useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Switch, Image, Platform } from 'react-native';
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { MyContext } from '../contextApi/AllApi';

const BusTicketSearch = ({ navigation }) => {
  const { setSearchParams } = useContext(MyContext);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [isWomenBooking, setIsWomenBooking] = useState(false);
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [isSearchDisabled, setIsSearchDisabled] = useState(true);
  const [recentSearch, setRecentSearch] = useState([]);

  
  const showDatePickerHandler = () => {
    setShowDatePicker(true);
  };

  const swapToFrom = () => {
    setFrom(to);
    setTo(from);
  };

  const addItemToRecent = () => {
    setRecentSearch([...recentSearch, { from, to, date }]);
  };

  const searchBuses = () => {
    setSearchParams({ from, to, date });
    navigation.navigate('AllBus');
    addItemToRecent();
  };

  useEffect(() => {
    if (from && to && date) {
      setIsSearchDisabled(false);
    } else {
      setIsSearchDisabled(true);
    }
  }, [from, to, date]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bus Tickets</Text>

      {/* From and To section */}
      <View style={styles.ticketContainer}>
        <View style={styles.inputRow}>
          <FontAwesome5 name="bus" size={18} color="black" />
          <View style={styles.inputContainer}>
            <Text style={styles.label}>From</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter starting point"
              value={from}
              onChangeText={setFrom}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.swapIcon} onPress={swapToFrom}>
          <MaterialIcons name="swap-vert" size={24} color="#333" />
        </TouchableOpacity>

        <View style={styles.inputRow}>
          <FontAwesome5 name="bus" size={18} color="black" />
          <View style={styles.inputContainer}>
            <Text style={styles.label}>To</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter destination"
              value={to}
              onChangeText={setTo}
            />
          </View>
        </View>
      </View>

      {/* Date of journey */}
      <View style={styles.dateContainer}>
        <View style={styles.labelContainer}>
          <MaterialIcons name="calendar-today" size={18} color="black" />
          <Text style={styles.dateLabel}>Date of Journey</Text>
        </View>
        <TouchableOpacity onPress={showDatePickerHandler} style={styles.dateTouchable}>
          <Text style={styles.dateText}>{date.toDateString()}</Text>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker value={date} mode="date" display="default" />
        )}
      </View>

      {/* Women Booking Switch */}
      <View style={styles.womenBookingContainer}>
        <Image source={require('../assets/woman-icon.png')} style={styles.womanIcon} />
        <View style={styles.switchLabelContainer}>
          <Text style={styles.womenLabel}>Booking for women</Text>
          <Text style={styles.knowMore}>Know more</Text>
        </View>
        <Switch
          trackColor={{ false: '#ccc', true: '#ff6d6d' }}
          thumbColor={isWomenBooking ? '#fff' : '#fff'}
          ios_backgroundColor="#ccc"
          onValueChange={() => setIsWomenBooking(!isWomenBooking)}
          value={isWomenBooking}
        />
      </View>

      {/* Search Button */}
      <TouchableOpacity
        style={[styles.searchButton, { backgroundColor: isSearchDisabled ? '#ccc' : '#f34343' }]}
        onPress={searchBuses}
        disabled={isSearchDisabled}
      >
        <Ionicons name="search" size={18} color="#fff" />
        <Text style={styles.searchButtonText}>Search buses</Text>
      </TouchableOpacity>

      {/* Recent Search */}
      <Text style={styles.recentSearch}>Recent Searches</Text>

      {recentSearch.map((data, index) => (
        <View style={styles.recentSearchContainer} key={index}>
          <FontAwesome5 name="bus" size={18} color="#f34343" />
          <View style={styles.recentSearchDetails}>
            <Text style={styles.recentSearchText}>{`${data.from} → ${data.to}`}</Text>
            <Text style={styles.recentSearchDate}>{data.date.toDateString()}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop:10
  },
  ticketContainer: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  inputContainer: {
    marginLeft: 10,
    flex: 1,
  },
  label: {
    fontSize: 12,
    color: '#888',
  },
  textInput: {
    fontSize: 16,
    fontWeight: '500',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 5,
  },
  swapIcon: {
    position: 'absolute',
    right: 10,
    top: 40,
  },
  dateContainer: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  dateLabel: {
    marginLeft: 5,
    fontSize: 12,
    color: '#888',
  },
  dateTouchable: {
    paddingVertical: 10,
  },
  dateText: {
    fontSize: 16,
    fontWeight: '500',
  },
  womenBookingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  womanIcon: {
    width: 30,
    height: 30,
  },
  switchLabelContainer: {
    flex: 1,
    marginLeft: 10,
  },
  womenLabel: {
    fontSize: 14,
    fontWeight: '500',
  },
  knowMore: {
    fontSize: 12,
    color: '#007aff',
  },
  searchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f34343',
    padding: 15,
    borderRadius: 25,
    marginBottom: 20,
  },
  searchButtonText: {
    marginLeft: 5,
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  recentSearchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  recentSearchDetails: {
    marginLeft: 10,
  },
  recentSearchText: {
    fontSize: 14,
    fontWeight: '500',
  },
  recentSearchDate: {
    fontSize: 12,
    color: '#999',
  },
  recentsearch:{
    fontSize:20,
    marginTop:10,
    marginBottom:10,
    fontWeight:"bold"
  }
});

export default BusTicketSearch;
