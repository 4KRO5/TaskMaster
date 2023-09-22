import React from "react";
import { TextInput } from "react-native";

export function EmailInput(props) {
  return (
    <TextInput
      style={props.style}
      placeholder="Nombre de usuario o correo electrónico"
      onChangeText={props.onChangeText}
      value={props.value}
    />
  );
}

export function PasswordInput(props) {
  return (
    <TextInput
      style={props.style}
      placeholder="Contraseña"
      secureTextEntry={true}
      onChangeText={props.onChangeText}
      value={props.value}
    />
  );
}