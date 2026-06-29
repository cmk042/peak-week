import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./src/screens/Home";
import Stats from "./src/screens/Stats";
import EnterResult from "./src/screens/EnterResult";
import Profile from "./src/screens/Profile";
import Settings from "./src/screens/Settings";
import BottomNav from "./src/components/BottomNav";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props) => <BottomNav {...props} />}
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Stats" component={Stats} />
        <Tab.Screen name="Add" component={EnterResult} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#0B1020",
  },
});
