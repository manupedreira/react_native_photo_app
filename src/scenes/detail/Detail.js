import React from "react";
import {
  Animated,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import CustomText from "../../components/CustomText/CustomText";
import { Color, Icons, themeStyles, Titles } from "../../config";

const styles = StyleSheet.create({
  closeContainer: {
    position: "absolute",
    top: 60,
    left: 27,
    width: 40,
    height: 40
  }
});

class Detail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bottomAnim: new Animated.Value(-27),
      fadeAnim: new Animated.Value(0),
      fullScreen: props.fullScreen,
      leftAnim: new Animated.Value(0)
    };
  }

  componentDidMount() {
    this.animateGradient(0, 1);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.offset !== this.props.offset) {
      this.animateSwipe();
    }
  }

  animateGradient(bottom, fade) {
    Animated.parallel([
      Animated.timing(this.state.fadeAnim, {
        toValue: fade,
        delay: 500,
        duration: 500
      }),
      Animated.timing(this.state.bottomAnim, {
        toValue: bottom,
        delay: 500,
        duration: 1000
      })
    ]).start();
  }

  animateSwipe() {
    const { leftAnim } = this.state;
    const { offset } = this.props;
    this.animateGradient(0, 1);
    if (offset[0] !== offset[1]) {
      const bounce = (offset[0] - offset[1]) * 10;
      Animated.sequence([
        Animated.timing(leftAnim, {
          toValue: bounce,
          duration: 200
        }),
        Animated.timing(leftAnim, {
          toValue: 0,
          duration: 500
        })
      ]).start();
    }
  }

  toggleInfo(toFullScreen) {
    if (toFullScreen) {
      this.animateGradient(-200, 0);
    } else {
      this.animateGradient(0, 1);
    }
    this.setState({
      fullScreen: toFullScreen
    });
  }

  renderProfile() {
    const { user } = this.props.data;
    const { goToProfile, index } = this.props;
    return (
      <TouchableOpacity
        style={themeStyles.detailProfile}
        onPress={() => goToProfile(user.username, index)}
      >
        <Image
          style={themeStyles.detailImage}
          source={{ uri: user.profile_image.medium }}
        />
        <View style={themeStyles.detailInfo}>
          <CustomText style={themeStyles.detailUser}>{user.name}</CustomText>
          <CustomText style={themeStyles.detailLink}>View profile</CustomText>
        </View>
      </TouchableOpacity>
    );
  }

  renderInfo() {
    const { bottomAnim, fadeAnim, leftAnim } = this.state;
    const { data, index } = this.props;
    return (
      <Animated.View
        style={[
          themeStyles.detailGradientContainer,
          { bottom: bottomAnim, opacity: fadeAnim }
        ]}
      >
        <LinearGradient colors={Color.gradient} style={{ flex: 1 }}>
          <Animated.View
            style={[
              themeStyles.detailGradient,
              { left: leftAnim, bottom: bottomAnim }
            ]}
          >
            <CustomText style={themeStyles.detailTitle}>
              {Titles[index]}
            </CustomText>
            <CustomText style={themeStyles.detailMedia}>
              {data.likes} likes
            </CustomText>
            {this.renderProfile()}
          </Animated.View>
        </LinearGradient>
      </Animated.View>
    );
  }

  render() {
    const { fullScreen } = this.state;
    const { data, goBack } = this.props;
    return (
      <TouchableWithoutFeedback
        style={themeStyles.detail}
        onPress={() => this.toggleInfo(!fullScreen)}
      >
        <View style={{ flex: 1 }}>
          <Image
            style={themeStyles.image}
            source={{ uri: data.urls.regular }}
          />
          <TouchableOpacity
            style={styles.closeContainer}
            onPress={() => goBack()}
          >
            <Image style={themeStyles.closeImage} source={Icons.ICON_WHITE} />
          </TouchableOpacity>
          {this.renderInfo()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default Detail;
