import Home from "@/screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      headerTitle: ""
    }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
