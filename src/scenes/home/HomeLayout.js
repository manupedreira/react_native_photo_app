import React from "react";
import { Animated, View, StyleSheet } from "react-native";
import { galleryConstants } from "../../core/gallery";
import CustomText from "../../components/CustomText/CustomText";
import List from "../../components/List/List";
import { Color, Font, Spacing, TextSize, themeStyles } from "../../config";

const styles = StyleSheet.create({
  titleContainer: {
    position: "relative",
    marginLeft: Spacing.padding,
    marginRight: Spacing.padding,
    paddingBottom: 40
  },
  titleDecoration: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    position: "absolute",
    top: 0,
    left: 0,
    width: 28,
    height: 28
  },
  decorationLine: {
    width: 24,
    height: 0,
    borderColor: Color.BLACK,
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 2
  }
});

class HomeLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fadeAnim: new Animated.Value(0),
      sizeAnim: new Animated.Value(12)
    };
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    const { fadeAnim, sizeAnim } = this.state;
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }),
      Animated.timing(sizeAnim, {
        toValue: 24,
        duration: 500
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
    const { gallery, goToDetail } = this.props;
    const { fadeAnim, sizeAnim } = this.state;

    return (
      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
        <View style={styles.titleContainer}>
          <View style={styles.titleDecoration}>
            <View style={styles.decorationLine} />
            <View style={[styles.decorationLine, { marginLeft: 4 }]} />
          </View>
          <Animated.Text style={[themeStyles.title, { fontSize: sizeAnim }]}>
            Discover
          </Animated.Text>
        </View>
        <List showPicture={goToDetail}>{gallery}</List>
      </Animated.View>
    );
  }

  render() {
    const { status } = this.props;

    return (
      <View style={themeStyles.container}>
        {status === galleryConstants.LOADING
          ? this.renderLoader()
          : this.renderContent()}
      </View>
    );
  }
}

export default HomeLayout;
