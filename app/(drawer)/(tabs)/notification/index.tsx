import About from '@/components/pages/notification';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Notification = () => {
    return (
        <SafeAreaView className='flex-1 w-full'>
            <About />
        </SafeAreaView> 
    );
}

export default Notification;
