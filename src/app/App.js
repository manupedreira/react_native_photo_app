import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { reduxifyNavigator } from "react-navigation-redux-helpers";
import { createAppNavigator } from "../core/navigation";

const AppNavigator = createAppNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch"
  }
});

class App extends Component {
  render() {
    const { nav, store } = this.props;
    const ReduxifiedNavigator = reduxifyNavigator(AppNavigator, "root");
    return (
      <View style={styles.container}>
        <ReduxifiedNavigator dispatch={store.dispatch} state={nav} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    nav: state.nav
  };
}

export default connect(mapStateToProps)(App);
