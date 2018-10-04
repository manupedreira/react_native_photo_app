import React from "react";
import { StatusBar } from "react-native";
import { connect } from "react-redux";
import { GalleryActions } from "../../core/gallery";
import { NavigationActions } from "../../core/navigation";
import HomeLayout from "./HomeLayout";

class HomeScreen extends React.Component {
  componentDidMount() {
    StatusBar.setBarStyle("dark-content", true);
    this.props.fetchPhotos(10);
  }

  render() {
    const { gallery, goToDetail, status } = this.props;
    return (
      <HomeLayout gallery={gallery} status={status} goToDetail={goToDetail} />
    );
  }
}

function mapStateToProps(state) {
  return {
    gallery: state.photos.gallery,
    status: state.photos.status
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPhotos: quantity => dispatch(GalleryActions.fetchGallery(quantity)),
    goToDetail: index => dispatch(NavigationActions.navigateToDetail(index))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
