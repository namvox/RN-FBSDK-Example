/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Button } from "react-native";
import { LoginManager } from "react-native-fbsdk";

export default class FBSDKExample extends Component {
  loginWithFB = () => {
    LoginManager.logInWithReadPermissions([
      "public_profile",
      "email"
    ]).then(result => {
      if (result.isCancelled) {
        // User cancelled to login with FB
      } else {
        // Do you something
      }
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{"\n"}
          Cmd+D or shake for dev menu
        </Text>
        <Button title="Login with FB" onPress={this.loginWithFB} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

AppRegistry.registerComponent("FBSDKExample", () => FBSDKExample);
