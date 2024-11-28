import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const CardHome = () => {
    return (
        <View className='w-full px-5 py-10 flex flex-col gap-5 bg-[#007BFF]'>

            <View className='w-full flex flex-row justify-between items-start'>
                <View className='flex flex-row gap-2 items-center'>
                    <Image source={require('../../../assets/icons/profile-photo.png')} className='w-14 h-14 rounded-full border' />
                    <View className='flex flex-col gap-0'>
                        <Text className='text-white font-bold text-lg'>Olá,</Text>
                        <Text className='text-white font-bold text-lg'>Kambaia!</Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity>
                        <Ionicons name="settings-outline" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>

            <View className='w-full rounded-lg flex justify-center items-center flex-col py-8 px-10 bg-blue-500'>
                <Text className='text-gray-300'>Saldo na Conta</Text>
                <View className='flex flex-row w-full mt-5 items-end justify-center'>
                    <Text className='text-white text-center font-bold text-2xl'>AOA14,235</Text>
                    <Text className='text-white text-center font-light text-xl pb-1'>.34</Text>
                </View>
                <View className='w-full flex flex-row justify-between items-center mt-5'>

                    <TouchableOpacity className='flex flex-col gap-2 items-center'>
                        <Octicons name="upload" size={20} color="white" />
                        <Text className='text-white text-center'>Transferidos</Text>
                    </TouchableOpacity>

                    <View className='h-10 border-l border-[#6F45E9]'></View>

                    <TouchableOpacity className='flex flex-col gap-2 items-center'>
                        <Octicons name="download" size={20} color="white" />
                        <Text className='text-white text-center'>Recebidos</Text>
                    </TouchableOpacity>

                    <View className='h-10 border-l border-[#6F45E9]'></View>

                    <TouchableOpacity className='flex flex-col gap-2 items-center'>
                        <MaterialIcons name="currency-exchange" size={20} color="white" />
                        <Text className='text-white text-center'>Transferir</Text>
                    </TouchableOpacity>

                </View>
            </View>

        </View>
    );
}

export default CardHome;