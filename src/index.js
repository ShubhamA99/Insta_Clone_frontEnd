import App from "./App";
import { AppRegistry, Platform } from "react-native";
import { BrowserRouter } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// import * as serviceWorker from './serviceWorker';

if (Platform.OS === "web") {
  AppRegistry.registerComponent("App", () => () => (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ));

  AppRegistry.runApplication("App", {
    rootTag: document.getElementById("root"),
  });
}

export default App;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
