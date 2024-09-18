import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

const MyContext = createContext();

const AllApi = ({ children }) => {
  const [AllBusData, setAllBusData] = useState([]);
  const [searchParams, setSearchParams] = useState({ from: 'Gumla', to: 'Palamu', date: new Date() }); // Default values for testing

  const DataOfAllBus = async () => {
    const { from, to, date } = searchParams;
    
    if (from && to && date) {
      const formattedDate = date.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
      const url = `http://localhost:1000/api/buses/api/searchBus?source_city=${from}&destination_city=${to}&date=${formattedDate}`;
      console.log('Request URL:', url);
      
      try {
        const res = await axios.get(url);  // Fetching bus data
        console.log('API Response:', res.data);
        
        if (res.status === 200 && res.data.length > 0) {
          setAllBusData(res.data); // Set bus data if available
        } else {
          console.error('No bus data available for this route and date.');
          setAllBusData([]); // Clear data if no results
        }
      } catch (error) {
        if (error.response) {
          console.error(`Error ${error.response.status}: ${error.response.data.message}`);
        } else if (error.request) {
          console.error('No response received from the server. Check if the server is running.');
        } else {
          console.error('Error during API request:', error.message);
        }
        setAllBusData([]); // Clear data in case of an error
      }
    }
  };

  useEffect(() => {
    DataOfAllBus();
  }, [searchParams]);

  return (
    <MyContext.Provider value={{ AllBusData, setSearchParams }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, AllApi };
