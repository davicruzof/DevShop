import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./HomeStack";
import { IconRenderer, TabBarStyle, routes } from "./utils";
import { routeType } from "./types";
import { Theme } from "@/theme/theme";
import { useContext } from "react";
import { CartContext } from "@/contexts/cartContext";
import Cart from "@/screens/Cart";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {

  const { products } = useContext(CartContext);

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
            tabBarBadge: products.length,
            tabBarBadgeStyle: {
              backgroundColor: Theme.colors.primary,
              color: 'white'
            }
          }}
          component={Cart}
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
