import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";

const App = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordReset, setIsPasswordReset] = useState(false);

  const handleResetPassword = () => {
    if (newPassword === confirmPassword) {
      setIsPasswordReset(true);
    } else {
      alert("Las contraseñas no coinciden.");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://picsum.photos/200/200' }}
        style={styles.image}
      />
      <Text style={styles.appName}>TaskMaster</Text>
      <Text style={styles.resetPasswordText}>Reset Password</Text>
      {isPasswordReset ? (
        <Text style={styles.resetMessage}>
          Hemos restablecido tu contraseña con éxito.
        </Text>
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="Contraseña actual"
            onChangeText={(text) => setCurrentPassword(text)}
            value={currentPassword}
            secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            placeholder="Nueva contraseña"
            onChangeText={(text) => setNewPassword(text)}
            value={newPassword}
            secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirmar contraseña"
            onChangeText={(text) => setConfirmPassword(text)}
            value={confirmPassword}
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.resetButton} onPress={handleResetPassword}>
            <Text style={styles.resetButtonText}>Reset Password</Text>
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
  resetPasswordText: {
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
  resetButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: 300,
    alignItems: 'center'
  },
  resetButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  loginRedirect: {
    marginVertical: 10
  }
});

export default App;