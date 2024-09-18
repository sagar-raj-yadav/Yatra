import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AllApi } from "./contextApi/AllApi"; // Ensure correct import

// All components
import AllBus from "./component/AllBus";
import BookSeat from "./component/BookSeat.jsx";
import SearchBus from "./component/SearchBus";
import BusRouteHeader from "./component/BusRouteHeader";

// All screens
import MyBooking from "./screens/MyBooking";
import Profile from "./screens/Profile.jsx";
import Music from "./screens/Music.jsx";

// Create Stack and Tab navigators
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearchBus"
        component={SearchBus}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AllBus"
        component={AllBus}
        options={({ navigation }) => ({
          header: () => <BusRouteHeader navigation={navigation} />, // Custom header
          headerStyle: { backgroundColor: "#fff" },
        })}
      />
      <Stack.Screen
        name="BookSeat"
        component={BookSeat}
        options={({ navigation }) => ({
          header: () => <BusRouteHeader navigation={navigation} />, // Custom header
          headerStyle: { backgroundColor: "black" },
        })}
      />
    </Stack.Navigator>
  );
};

// Import icons
import MaterialIcons from "@expo/vector-icons/MaterialIcons"; // Booking icon
import Entypo from "@expo/vector-icons/Entypo"; // Home icon
import FontAwesome from "@expo/vector-icons/FontAwesome"; // Profile icon
import FontAwesome5 from "@expo/vector-icons/FontAwesome5"; //music icon

// Main App Component
const App = () => {
  return (
    <AllApi>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={() => ({
            tabBarStyle: {
              // Apply static styles
              height: 80,
              borderTopWidth: 1,
              paddingBottom: 20,
              paddingTop: 4,
              elevation: 0,
              shadowOpacity: 0,
            },
          })}
        >
          {/* Home tab */}
          <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <Entypo
                  name="home"
                  size={30}
                  color={focused ? "#F64B4B" : "black"}
                />
              ),
              tabBarLabelStyle: {
                fontSize: 10,
                color: "black",
                fontWeight:"bold"
              },
            }}
          />

          {/* Booking tab */}
          <Tab.Screen
            name="My Booking"
            component={MyBooking}
            options={{
              tabBarIcon: ({ focused }) => (
                <MaterialIcons
                  name="confirmation-num"
                  size={30}
                  color={focused ? "#F64B4B" : "black"}
                />
              ),
              tabBarLabelStyle: {
                fontSize: 10,
                color: "black",
                fontWeight:"bold"
              },
            }}
          />

          {/* music tab */}
          <Tab.Screen
            name="Music"
            component={Music}
            options={{
              tabBarIcon: ({ focused }) => (
                <FontAwesome5
                  name="music"
                  size={24}
                  color={focused ? "#F64B4B" : "black"}
                />
              ),
              tabBarLabelStyle: {
                fontSize: 10,
                color: "black",
                fontWeight:"bold"
              },
            }}
          />

          {/* Profile tab */}
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarIcon: ({ focused }) => (
                <FontAwesome
                  name="user-circle-o"
                  size={30}
                  color={focused ? "#F64B4B" : "black"}
                />
              ),
              tabBarLabelStyle: {
                fontSize: 10,
                color: "black",
                fontWeight:"bold"
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </AllApi>
  );
};

export default App;
