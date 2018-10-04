import React from "react";
import { Text, StyleSheet } from "react-native";
import { Color, Font, TextSize } from "../../config";

const styles = StyleSheet.create({
  font: {
    color: Color.BLACK,
    fontFamily: Font.MUSEO_REGULAR,
    fontSize: TextSize.H5
  }
});

function CustomText(props) {
  return <Text style={[styles.font, props.style]}>{props.children}</Text>;
}

export default CustomText;
