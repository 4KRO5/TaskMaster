import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./Style/Style";

const ForgotPassword = () => {
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
      <Text style={styles.sectionTitle}>Forgot Password</Text>
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
          <TouchableOpacity style={styles.button} onPress={handleForgotPassword}>
            <Text style={styles.buttonText}>Enviar Instrucciones de Reinicio</Text>
          </TouchableOpacity>
        </>
      )}
      <TouchableOpacity style={styles.loginRedirect}>
        <Text>¿Recordaste tu contraseña? Iniciar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ForgotPassword;