import { Animated, Easing } from "react-native";
import { createStackNavigator } from "react-navigation";
import HomeScreen from "../../scenes/home";
import DetailScreen from "../../scenes/detail";
import ProfileScreen from "../../scenes/profile";

export function createAppNavigator() {
  const AppNavigator = createStackNavigator(
    {
      HomeScreen: {
        screen: HomeScreen
      },
      DetailScreen: {
        screen: DetailScreen
      },
      ProfileScreen: {
        screen: ProfileScreen
      }
    },
    {
      headerMode: "none",
      initialRouteName: "HomeScreen"
    }
  );

  return AppNavigator;
}
