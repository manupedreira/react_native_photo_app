import React from "react";
import { StatusBar, Text, View } from "react-native";
import { connect } from "react-redux";
import { UserActions } from "../../core/user";
import { NavigationActions } from "../../core/navigation";
import ProfileLayout from "./ProfileLayout";

class ProfileScreen extends React.Component {
  componentDidMount() {
    const { userId } = this.props.navigation.state.params;
    StatusBar.setBarStyle("dark-content", true);
    this.props.fetchUser(userId);
  }

  render() {
    const { user, goToDetail, status } = this.props;
    const { index } = this.props.navigation.state.params;
    return (
      <ProfileLayout
        user={user}
        status={status}
        goToDetail={goToDetail}
        index={index}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.data,
    status: state.user.status
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUser: userId => dispatch(UserActions.fetchUser(userId)),
    goToDetail: index => dispatch(NavigationActions.navigateToDetail(index))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen);
