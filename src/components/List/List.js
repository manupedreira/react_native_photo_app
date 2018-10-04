import React from "react";
import { ScrollView, Text, View } from "react-native";
import Card from "../Card/Card";
import { themeStyles } from "../../config";

class List extends React.Component {
  renderCard(child, index) {
    const showPicture = this.props.showPicture || "";
    return (
      <Card key={index} index={index} data={child} showPicture={showPicture} />
    );
  }

  render() {
    const { children } = this.props;

    return (
      <ScrollView>
        <View style={themeStyles.scrollList}>
          {children.map((child, index) => this.renderCard(child, index))}
        </View>
      </ScrollView>
    );
  }
}

export default List;
