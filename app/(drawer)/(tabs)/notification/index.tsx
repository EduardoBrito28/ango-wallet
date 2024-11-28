import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Notification = () => {
    return (
        <SafeAreaView className='flex-1 w-full flex-col p-5'>
            <Text className='text-3xl font-bold'>Mais Opções</Text>
        </SafeAreaView>
    );
}

export default Notification;
