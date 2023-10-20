import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./HomeStack";
import { IconRenderer, TabBarStyle, routes } from "./utils";
import { routeType } from "./types";
import { Theme } from "@/theme/theme";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color }) => {
            return IconRenderer(
              routes[route.name as keyof routeType].icon,
              color,
              routes[route.name as keyof routeType].type
            );
          },
          tabBarIconStyle: {
            marginTop: 10,
          },
          tabBarStyle: TabBarStyle,
          tabBarActiveTintColor: Theme.colors.primary,
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen
          name="Menu"
          options={{
            tabBarLabel: "Categorias",
          }}
          component={HomeStack}
        />
        <Tab.Screen
          name="Cart"
          options={{
            tabBarLabel: "Carrinho",
          }}
          component={HomeStack}
        />
        <Tab.Screen
          name="Profile"
          options={{
            tabBarLabel: "Perfil",
          }}
          component={HomeStack}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
