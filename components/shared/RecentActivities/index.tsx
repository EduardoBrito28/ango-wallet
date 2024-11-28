import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface ListItem {
    id: string;
    name: string;
    image: string;
    date: string;
    value: number;
}

const imageMap: Record<string, any> = {
    'profile-photo': require('../../../assets/icons/unitel.jpeg'),
    'profile-photo-2': require('../../../assets/icons/Topup.png'),
    'profile-photo-3': require('../../../assets/icons/Netflix.png'),
    'profile-photo-4': require('../../../assets/icons/africel.png'),
};

const data = [
    { id: '1', name: 'Unitel', image: 'profile-photo', date: 'Hoje 12:32', value: -35.23 },
    { id: '2', name: 'Tranferencia', image: 'profile-photo-2', date: 'Ontem 02:12', value: 430.15 },
    { id: '3', name: 'Netflix', image: 'profile-photo-3', date: 'Dez 24 14:53', value: -3580.03 },
    { id: '4', name: 'Africel', image: 'profile-photo-4', date: 'Dez 24 14:53', value: -12.23 },
];

const renderItem = ({ item }: { item: ListItem }) => (
    <View className='w-full flex flex-row justify-between items-center border-b border-gray-200 py-5'>
        <View className='flex flex-row items-center gap-2'>
            <Image source={imageMap[item.image]} className='w-14 h-14 rounded-lg' />
            <View className='flex flex-col gap-0'>
                <Text className='font-bold text-[19px]'>{item.name}</Text>
                <Text className='text-gray-500'>{item.date}</Text>
            </View>
        </View>
        <View className='flex flex-row gap-2 items-center justify-center'>
            <Text className={`${item.value < 0 ? 'text-red-600' : 'text-green-600'} text-lg`}>AOA {item.value}</Text>
            <MaterialIcons name="arrow-forward-ios" size={14} color="black" />
        </View>
    </View>
);

const RecentActivities = () => {
    return (
        <View className='w-full flex flex-col px-5 mt-10'>

            <View className='w-full flex flex-row justify-between '>
                <Text className='font-bold text-[18px]'>Acividades recentes</Text>
                <TouchableOpacity>
                    <Text className='text-gray-400 text-[18px]'>Ver Todos</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                nestedScrollEnabled
            />

        </View>
    );
}

export default RecentActivities;