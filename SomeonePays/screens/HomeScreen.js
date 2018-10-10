import React from "react";
import {
  Image,
  StyleSheet,
  View,
  Button,
  Alert,
  TextInput
} from "react-native";
import { WebBrowser } from "expo";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={
            __DEV__
              ? require("../assets/images/robot-dev.png")
              : require("../assets/images/robot-prod.png")
          }
          style={styles.welcomeImage}
        />

        <View>
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={username => this.setState({ username: username })}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={password => this.setState({ password: password })}
          />
          <Button onPress={this.onLoginPress} title="Press to login" />
        </View>
      </View>
    );
  }

  onLoginPress = () => {
    if (this.state.username == "Kasper" && this.state.password == "Blizz") {
      Alert.alert(
        "Alert Title",
        "My Alert Msg",
        [
          {
            text: "OK",
            onPress: () => console.log("OK Pressed")
          }
        ],
        { cancelable: false }
      );
    }
  };

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync(
      "https://docs.expo.io/versions/latest/guides/development-mode"
    );
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      "https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes"
    );
  };
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  welcomeImage: {
    width: 200,
    height: 160,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  input: {
    width: 200,
    height: 40
  }
});
