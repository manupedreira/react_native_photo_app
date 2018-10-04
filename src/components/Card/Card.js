import React from "react";
import { Animated, Dimensions, Image, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Overlay from "react-native-modal-overlay";
import CustomText from "../../components/CustomText/CustomText";
import { Color, themeStyles, Titles } from "../../config";

class Card extends React.Component {
  constructor(props) {
    super(props);

    const { width: windowWidth, height: windowHeight } = Dimensions.get(
      "window"
    );

    const width = (windowWidth - 81) / 2;
    const height = (windowWidth - 81) * 0.75;

    this.state = {
      fadeAnim: new Animated.Value(0),
      height,
      heightAnim: new Animated.Value(height),
      modalVisible: false,
      topAnim: new Animated.Value(10),
      width,
      widthAnim: new Animated.Value(width),
      windowHeight,
      windowWidth
    };
  }

  componentDidMount() {
    const { fadeAnim, topAnim } = this.state;
    const { showPicture } = this.props;
    Animated.parallel([
      Animated.timing(topAnim, {
        toValue: 0,
        delay: 500,
        duration: 500
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        delay: 500,
        duration: 500
      })
    ]).start();
  }

  showPicture() {
    const {
      modalVisible,
      height,
      heightAnim,
      width,
      widthAnim,
      windowWidth,
      windowHeight
    } = this.state;
    Animated.parallel([
      Animated.timing(heightAnim, {
        toValue: modalVisible ? height : windowHeight,
        duration: 500
      }),
      Animated.timing(widthAnim, {
        toValue: modalVisible ? width : windowWidth,
        duration: 500
      })
    ]).start();

    this.setState({
      ...this.state,
      modalVisible: !modalVisible
    });
  }

  renderImage() {
    const {
      heightAnim,
      offsetXAnim,
      offsetYAnim,
      modalVisible,
      widthAnim
    } = this.state;
    const { data } = this.props;
    const animation = {
      top: offsetYAnim,
      left: offsetXAnim,
      width: widthAnim,
      height: heightAnim
    };
    return (
      <Overlay
        visible={modalVisible}
        animationDuration={500}
        containerStyle={{ backgroundColor: "transparent" }}
        closeOnTouchOutside
      >
        <Animated.View style={[themeStyles.card, animation]}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => this.showPicture()}
          >
            <Image
              style={themeStyles.image}
              source={{ uri: data.urls.regular }}
            />
          </TouchableOpacity>
        </Animated.View>
      </Overlay>
    );
  }

  render() {
    const { fadeAnim, topAnim } = this.state;
    const { data, showPicture, index } = this.props;
    const pressAction =
      showPicture !== "" ? () => showPicture(index) : () => this.showPicture();

    return (
      <TouchableOpacity
        style={[themeStyles.card, index % 2 ? themeStyles.odd : {}]}
        onPress={pressAction}
      >
        {showPicture === "" && this.renderImage()}
        <Image style={themeStyles.image} source={{ uri: data.urls.small }} />
        <LinearGradient
          colors={Color.gradient}
          style={themeStyles.cardGradient}
        >
          <Animated.View
            style={[
              themeStyles.cardAnimated,
              { top: topAnim, opacity: fadeAnim }
            ]}
          >
            <CustomText style={themeStyles.cardTitle}>
              {Titles[index]}
            </CustomText>
            <CustomText style={themeStyles.cardMedia}>
              {data.likes} likes
            </CustomText>
          </Animated.View>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}

export default Card;
