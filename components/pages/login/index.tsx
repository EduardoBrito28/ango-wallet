import { router } from 'expo-router';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export const LoginForm = () => {
    return (
      <View className="bg-white w-full rounded-tl-3xl rounded-tr-3xl p-8">
        <Text className="text-lg mb-5 text-gray-800">Entre no shawallet</Text>
  
        <TextInput
          className="w-full border border-gray-300 rounded-md p-2.5 mb-3.5 text-base"
          placeholder="Código"
          keyboardType="numeric"
        />
        <TextInput
          className="w-full border border-gray-300 rounded-md p-2.5 mb-3.5 text-base"
          placeholder="Senha"
          secureTextEntry
        />
  
        <TouchableOpacity onPress={()=> router.replace("/(drawer)/(tabs)")} className="w-full bg-[#007BFF] p-3.5 rounded-md items-center">
          <Text className="text-white text-base font-bold">Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> router.replace("/register")} className="w-full items-center">
          <Text className="text-blue-600 text-base font-bold">Criar uma Conta</Text>
        </TouchableOpacity>
      </View>
    );
  };

export default LoginForm;