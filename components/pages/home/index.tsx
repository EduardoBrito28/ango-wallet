import CardHome from '@/components/shared/CardHome';
import RecentActivities from '@/components/shared/RecentActivities';
import { defaultConfig } from '@/styles/colors';
import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ListItem {
    id: string;
    name: string;
    user: string;
}

const imageMap: Record<string, any> = {
    'profile-photo': require('../../../assets/icons/profile-photo.png'),
    'profile-photo-2': require('../../../assets/icons/profile-photo-2.png'),
    'profile-photo-3': require('../../../assets/icons/profile-photo-3.png'),
    'profile-photo-4': require('../../../assets/icons/profile-photo-4.png'),
};

const data = [
    { id: '1', name: 'Eduardo', user: 'profile-photo' },
    { id: '2', name: 'Maria', user: 'profile-photo-2' },
    { id: '3', name: 'Joel', user: 'profile-photo-3' },
    { id: '4', name: 'Teodoro', user: 'profile-photo-4' },
];


const renderItem = ({ item }: { item: ListItem }) => (
    <View className='bg-white flex flex-col justify-center items-center mr-5 gap-2'>
        <Image source={imageMap[item.user]} className='w-20 h-20 rounded-full' />
        <Text className='text-black text-[15px]'>{item.name}</Text>
    </View>
);

const HomePage = () => {
    return (
        <SafeAreaView className='flex-1 bg-white'>
            <ScrollView
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
                className=''
            >
                <CardHome />

                <View style={{ padding: defaultConfig.mobilePadding.medium }}>
                    <Text className='font-bold text-[18px]'>Transferencias Recentes</Text>
                    <View className='flex flex-row justify-center items-start pt-5 gap-5'>
                        <View className='bg-white flex flex-col justify-center items-center gap-2'>
                            <Image source={require('../../../assets/icons/new-transfer.png')} className='w-20 h-20 rounded-full' />
                            <Text className='text-black text-[15px]'>Novo</Text>
                        </View>
                        <FlatList
                            data={data}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            nestedScrollEnabled
                        />
                    </View>
                </View>

                <RecentActivities />
            </ScrollView>

        </SafeAreaView>
    );
}

export default HomePage;