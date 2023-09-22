import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./Style/Style";

export default function ResetPassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordReset, setIsPasswordReset] = useState(false);

  const resetPassword = () => {
    if (newPassword === confirmPassword) {
      setIsPasswordReset(true);
    } else {
      alert("Las contraseñas no coinciden.");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://picsum.photos/200/200' }} style={styles.image} />
      <Text style={styles.appName}>TaskMaster</Text>
      <Text style={styles.sectionTitle}>Reset Password</Text>
      {isPasswordReset ? (
        <Text style={styles.resetMessage}>Contraseña restablecida con éxito.</Text>
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
          <TouchableOpacity style={styles.button} onPress={resetPassword}>
            <Text style={styles.buttonText}>Reset Password</Text>
          </TouchableOpacity>
        </>
      )}
      <TouchableOpacity style={styles.forgotPassword}>
        <Text>¿Recordaste tu contraseña? Iniciar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}