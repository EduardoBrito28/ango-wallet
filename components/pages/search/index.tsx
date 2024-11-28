import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

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

const initialData = [
    { id: '1', name: 'Unitel', image: 'profile-photo', date: 'Hoje 12:32', value: -35.23 },
    { id: '2', name: 'Tranferencia', image: 'profile-photo-2', date: 'Ontem 02:12', value: 430.15 },
    { id: '3', name: 'Netflix', image: 'profile-photo-3', date: 'Dez 24 14:53', value: -3580.03 },
    { id: '4', name: 'Africel', image: 'profile-photo-4', date: 'Dez 24 14:53', value: -12.23 },
];

const renderItem = ({ item }: { item: ListItem }) => (
    <View className="w-full flex flex-row justify-between items-center border-b border-gray-200 py-5">
        <View className="flex flex-row items-center gap-2">
            <Image source={imageMap[item.image]} className="w-14 h-14 rounded-lg" />
            <View className="flex flex-col gap-0">
                <Text className="font-bold text-[19px]">{item.name}</Text>
                <Text className="text-gray-500">{item.date}</Text>
            </View>
        </View>
        <View className="flex flex-row gap-2 items-center justify-center">
            <Text className={`${item.value < 0 ? 'text-red-600' : 'text-green-600'} text-lg`}>AOA {item.value}</Text>
            <MaterialIcons name="arrow-forward-ios" size={14} color="black" />
        </View>
    </View>
);

export default function History() {
    const [searchQuery, setSearchQuery] = useState(''); // Estado para o texto da pesquisa
    const [filteredData, setFilteredData] = useState(initialData); // Estado para os dados filtrados

    // Função para atualizar os resultados da pesquisa
    const handleSearch = (query: string) => {
        setSearchQuery(query);
        if (query.trim() === '') {
            setFilteredData(initialData); // Mostrar todos os itens se o texto estiver vazio
        } else {
            setFilteredData(
                initialData.filter((item) =>
                    item.name.toLowerCase().includes(query.toLowerCase())
                )
            );
        }
    };

    return (
        <View className="w-full flex">
            <Text className="text-2xl font-bold text-gray-800 p-5">Histórico</Text>

            <View className="flex flex-row w-full gap-2 justify-between items-center px-5">
                <View className="flex-1 border border-gray-500 rounded-md p-3 gap-2 flex justify-start flex-row items-center">
                    <AntDesign name="search1" size={20} color="black" />
                    <TextInput
                        placeholder="Destinatário..."
                        value={searchQuery}
                        onChangeText={handleSearch}
                        className="flex-1 text-[14px]"
                    />
                </View>

                <TouchableOpacity className="border border-gray-500 rounded-md p-3 gap-2 flex justify-between flex-row items-center">
                    <MaterialIcons name="filter-list" size={18} color="black" />
                    <Text className="text-lg font-medium">Filtrar</Text>
                </TouchableOpacity>
            </View>

            <View className="w-full p-5">
                <FlatList
                    data={filteredData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    nestedScrollEnabled
                />
            </View>
        </View>
    );
}
