import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";

const App = () => {
  const [email, setEmail] = useState("");
  const [isPasswordReset, setIsPasswordReset] = useState(false);

  const handleForgotPassword = () => {
    if (email.trim() === "") {
      alert("Por favor, ingrese su dirección de correo electrónico.");
    } else {
      setIsPasswordReset(true);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://picsum.photos/200/200' }}
        style={styles.image}
      />
      <Text style={styles.appName}>TaskMaster</Text>
      <Text style={styles.forgotPasswordText}>Forgot Password</Text>
      {isPasswordReset ? (
        <Text style={styles.resetMessage}>
          Hemos enviado instrucciones para restablecer su contraseña a su correo electrónico.
        </Text>
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            value={email}
            keyboardType="email-address"
          />
          <TouchableOpacity style={styles.forgotButton} onPress={handleForgotPassword}>
            <Text style={styles.forgotButtonText}>Enviar Instrucciones de Restablecimiento</Text>
          </TouchableOpacity>
        </>
      )}
      <TouchableOpacity style={styles.loginRedirect}>
        <Text>¿Recordaste tu contraseña? Iniciar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100
  },
  appName: {
    fontSize: 24,
    marginVertical: 10
  },
  forgotPasswordText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  resetMessage: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'center'
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  forgotButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: 300,
    alignItems: 'center'
  },
  forgotButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  loginRedirect: {
    marginVertical: 10
  }
});

export default App;