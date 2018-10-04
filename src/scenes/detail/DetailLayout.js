import React from "react";
import { Animated, StyleSheet, View } from "react-native";
import Swiper from "react-native-swiper";
import Detail from "./Detail";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden"
  }
});

class DetailLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fadeAnim: new Animated.Value(0),
      fullScreen: false,
      index: props.index,
      offset: [props.index, props.index]
    };
  }

  componentDidMount() {
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start();
  }

  animate(nextIndex) {
    const { index } = this.state;
    if (nextIndex !== index) {
      this.setState({
        ...this.state,
        index: nextIndex,
        offset: [nextIndex, index]
      });
    }
  }

  renderDetail(photo, index) {
    const { fullScreen, offset } = this.state;
    const { goBack, goToProfile } = this.props;
    return (
      <Detail
        key={index}
        index={index}
        fullScreen={fullScreen}
        offset={offset}
        data={photo}
        goBack={goBack}
        goToProfile={goToProfile}
      />
    );
  }

  render() {
    const { fadeAnim } = this.state;
    const { gallery, index } = this.props;
    return (
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <Swiper
          index={index}
          showsPagination={false}
          loop={false}
          onMomentumScrollEnd={(e, state) => this.animate(state.index)}
        >
          {gallery.map((photo, index) => this.renderDetail(photo, index))}
        </Swiper>
      </Animated.View>
    );
  }
}

export default DetailLayout;
