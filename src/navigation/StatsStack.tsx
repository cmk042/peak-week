import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Stats from "../screens/Stats";
import EventDetail from "../screens/EventDetail";

const Stack = createNativeStackNavigator();

export default function StatsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="StatsHome" component={Stats} />
      <Stack.Screen name="EventDetail" component={EventDetail} />
    </Stack.Navigator>
  );
}
