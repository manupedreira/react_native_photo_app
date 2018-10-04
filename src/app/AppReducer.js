import { combineReducers } from "redux";
import { createNavigationReducer } from "react-navigation-redux-helpers";
import { createAppNavigator } from "../core/navigation";
import { GalleryReducer } from "../core/gallery";
import { UserReducer } from "../core/user";

const AppNavigator = createAppNavigator();
const NavReducer = createNavigationReducer(AppNavigator);

export default combineReducers({
  nav: NavReducer,
  photos: GalleryReducer,
  user: UserReducer
});
