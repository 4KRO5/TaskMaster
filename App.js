import React from "react";
import { View } from "react-native";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import ForgotPassword from "./Components/ForgotPassword";
import ResetPassword from "./Components/ResetPassword";

const App = () => {
  return (
    <View>
      <Login />
      {/* <SignUp />
      <ForgotPassword />
      <ResetPassword /> */}
    </View>
  );
}

export default App;