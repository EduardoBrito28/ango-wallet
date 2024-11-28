import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function About() {
    return (
        <View className='flex-1 w-full'>
            <Text className='text-2xl font-bold text-gray-800 p-5'>Mais Opções</Text>

            <View className='w-full flex flex-col mt-5 pb-5 px-5'>
                <TouchableOpacity className='w-full flex flex-row justify-between items-center py-5 border-b border-gray-200'>
                    <View className='flex flex-row gap-2 items-center'>
                        <Image source={require('../../../assets/icons/perfil.png')} className='w-14 h-14 rounded-lg' />
                        <Text className='text-lg font-medium'>Perfil</Text>
                    </View>
                    <View>
                        <MaterialIcons name="arrow-forward-ios" size={18} color="black" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity className='w-full flex flex-row justify-between items-center py-5 border-b border-gray-200'>
                    <View className='flex flex-row gap-2 items-center'>
                        <Image source={require('../../../assets/icons/transfer.png')} className='w-14 h-14 rounded-lg' />
                        <Text className='text-lg font-medium'>Transferências</Text>
                    </View>
                    <View>
                        <MaterialIcons name="arrow-forward-ios" size={18} color="black" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity className='w-full flex flex-row justify-between items-center py-5'>
                    <View className='flex flex-row gap-2 items-center'>
                        <Image source={require('../../../assets/icons/analytics.png')} className='w-14 h-14 rounded-lg' />
                        <Text className='text-lg font-medium'>Movimentos</Text>
                    </View>
                    <View>
                        <MaterialIcons name="arrow-forward-ios" size={18} color="black" />
                    </View>
                </TouchableOpacity>
            </View>

            <View className='w-full h-2 bg-gray-200'></View>

            <View className='w-full flex flex-col mt-5 pb-5 px-5'>
                <TouchableOpacity className='w-full flex flex-row justify-between items-center py-5 border-b border-gray-200'>
                    <View className='flex flex-row gap-2 items-center'>
                        <Image source={require('../../../assets/icons/help.png')} className='w-14 h-14 rounded-lg' />
                        <Text className='text-lg font-medium'>Ajuda</Text>
                    </View>
                    <View>
                        <MaterialIcons name="arrow-forward-ios" size={18} color="black" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity className='w-full flex flex-row justify-between items-center py-5 border-b border-gray-200'>
                    <View className='flex flex-row gap-2 items-center'>
                        <Image source={require('../../../assets/icons/contact.png')} className='w-14 h-14 rounded-lg' />
                        <Text className='text-lg font-medium'>Contacte-nos</Text>
                    </View>
                    <View>
                        <MaterialIcons name="arrow-forward-ios" size={18} color="black" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity className='w-full flex flex-row justify-between items-center py-5'>
                    <View className='flex flex-row gap-2 items-center'>
                        <Image source={require('../../../assets/icons/about.png')} className='w-14 h-14 rounded-lg' />
                        <Text className='text-lg font-medium'>Sobre</Text>
                    </View>
                    <View>
                        <MaterialIcons name="arrow-forward-ios" size={18} color="black" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}
