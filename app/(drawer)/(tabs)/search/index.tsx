import History from '@/components/pages/search';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Search = () => {
    return (
        <SafeAreaView className='flex-1 w-full'>
            <History />
        </SafeAreaView>
    );
}

export default Search;
