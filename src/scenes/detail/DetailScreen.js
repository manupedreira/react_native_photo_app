import React from "react";
import { StatusBar } from "react-native";
import { connect } from "react-redux";
import { NavigationActions } from "../../core/navigation";
import DetailLayout from "./DetailLayout";

class DetailScreen extends React.Component {
  componentDidMount() {
    StatusBar.setBarStyle("light-content", true);
  }

  render() {
    const { index } = this.props.navigation.state.params;
    const { gallery, goBack, goToProfile } = this.props;

    return (
      <DetailLayout
        gallery={gallery}
        goBack={goBack}
        goToProfile={goToProfile}
        index={index}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    gallery: state.photos.gallery
  };
}

function mapDispatchToProps(dispatch) {
  return {
    goBack: () => dispatch(NavigationActions.navigateToHome()),
    goToProfile: (userId, index) =>
      dispatch(NavigationActions.navigateToProfile(userId, index))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailScreen);
