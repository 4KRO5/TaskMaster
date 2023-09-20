import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
      alert("Por favor, complete todos los campos.");
    } else {
      alert("Registro exitoso");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://picsum.photos/200/200' }}
        style={styles.image}
      />
      <Text style={styles.appName}>TaskMaster</Text>
      <Text style={styles.signupText}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>Or</Text>
      <TouchableOpacity style={styles.loginRedirect}>
        <Text>Already have an account? Login</Text>
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
  signupText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
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
  signupButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: 300,
    alignItems: 'center'
  },
  signupButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  orText: {
    marginVertical: 10,
    fontWeight: 'bold'
  },
  loginRedirect: {
    marginVertical: 10
  }
});

export default App;