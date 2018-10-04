// @flow
import { NavigationActions } from "react-navigation";

export function navigateToHome() {
  return NavigationActions.navigate({
    routeName: "HomeScreen"
  });
}

export function navigateToDetail(index) {
  return NavigationActions.navigate({
    routeName: "DetailScreen",
    params: { index }
  });
}

export function navigateToProfile(userId, index) {
  return NavigationActions.navigate({
    routeName: "ProfileScreen",
    params: { userId, index }
  });
}
