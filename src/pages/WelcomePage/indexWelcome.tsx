import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './stylesWelcome'; 

export default function Welcome({ navigation }: any) {
  const [name, setName] = useState('');

  const handleLogin = async () => {
    if (!name) {
      Alert.alert("Erro", "Digite seu nome para continuar");
      return;
    }

    // salva o nome
    await AsyncStorage.setItem('@user_name', name);

    // pede localização
    let { status } = await Location.requestForegroundPermissionsAsync();

    const userLocation = await Location.getCurrentPositionAsync({});
    console.log(userLocation);

    navigation.navigate('Home'); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoPlaceholder}>
        <Text>Logo Futura</Text>
      </View>

      <TextInput 
        style={styles.input} 
        placeholder="Seu nome" 
        value={name} // É bom manter o valor vinculado ao estado
        onChangeText={setName}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}