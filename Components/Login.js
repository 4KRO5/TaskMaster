import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from 'react-native-animatable';
import { styles } from "./Style/Style";

export default function Login() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    if (username === "usuario" && password === "contraseña") {
      alert("Inicio de sesión exitoso");
    } else {
      setErrorMessage("Credenciales no válidas. Intente de nuevo.");
    }
  };

  const handleSignUpRedirect = () => {
    navigation.navigate("SignUp");
  };

  const handleForgotPasswordRedirect = () => {
    navigation.navigate("ForgotPassword"); // Asegúrate de que "ForgotPassword" sea el nombre correcto
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://picsum.photos/200/200' }}
        style={styles.image}
      />
      <Text style={styles.appName}>TaskMaster</Text>
      <Text style={styles.sectionTitle}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario o correo electrónico"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      {errorMessage ? (
        <Animatable.View
          animation="slideInLeft"
          style={styles.errorContainer}
        >
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        </Animatable.View>
      ) : null}
      <TouchableOpacity style={styles.forgotPassword} onPress={handleForgotPasswordRedirect}>
        <Text>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginRedirect} onPress={handleSignUpRedirect}>
        <Text>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}