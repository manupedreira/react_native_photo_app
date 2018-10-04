import React from "react";
import {
  Animated,
  Image,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import { userConstants } from "../../core/user";
import CustomText from "../../components/CustomText/CustomText";
import List from "../../components/List/List";
import {
  Color,
  Font,
  Icons,
  Spacing,
  TextSize,
  themeStyles
} from "../../config";

const styles = StyleSheet.create({
  profileContainers: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 40,
    paddingLeft: Spacing.padding,
    paddingRight: Spacing.padding
  },
  closeContainer: {
    width: 40,
    height: 40
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  profileName: {
    fontFamily: Font.MUSEO_BOLD,
    textAlign: "left"
  },
  profileBio: {
    marginTop: 5,
    color: Color.BLACK,
    fontFamily: Font.MUSEO_EXTRA_LIGHT,
    fontSize: TextSize.H6
  }
});

class ProfileLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fadeAnim: new Animated.Value(0),
      leftAnim: new Animated.Value(27)
    };
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    const { fadeAnim, leftAnim } = this.state;
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        delay: 500,
        duration: 400
      }),
      Animated.timing(leftAnim, {
        toValue: 0,
        delay: 500,
        duration: 400
      })
    ]).start();
  }

  renderLoader() {
    return (
      <View style={themeStyles.loadingContainer}>
        <CustomText style={themeStyles.title}>Loading...</CustomText>
      </View>
    );
  }

  renderContent() {
    const { goToDetail, index, user } = this.props;
    return (
      <View style={[themeStyles.container, { paddingTop: 0 }]}>
        <View style={styles.profileContainers}>
          <TouchableOpacity
            style={styles.closeContainer}
            onPress={() => goToDetail(index)}
          >
            <Image style={themeStyles.closeImage} source={Icons.ICON_BLACK} />
          </TouchableOpacity>
        </View>
        {this.renderUser()}
        <List>{user.photos}</List>
      </View>
    );
  }

  renderUser() {
    const { user } = this.props;
    const { fadeAnim, leftAnim } = this.state;
    return (
      <View style={styles.profileContainers}>
        <Image
          style={themeStyles.detailImage}
          source={{ uri: user.profile_image.large }}
        />
        <Animated.View
          style={[
            themeStyles.detailInfo,
            { left: leftAnim, opacity: fadeAnim }
          ]}
        >
          <CustomText style={[themeStyles.title, styles.profileName]}>
            {user.name}
          </CustomText>
          <CustomText style={styles.profileBio}>{user.bio}</CustomText>
        </Animated.View>
      </View>
    );
  }

  render() {
    const { status } = this.props;

    return (
      <View style={themeStyles.container}>
        {status === userConstants.LOADING
          ? this.renderLoader()
          : this.renderContent()}
      </View>
    );
  }
}

export default ProfileLayout;
