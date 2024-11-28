import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const TabsLayout = () => {
    return (
        <Tabs
            sceneContainerStyle={{
                backgroundColor: "#fff",
            }}
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar, 
                tabBarActiveTintColor: '#007BFF', 
                tabBarInactiveTintColor: '#4a4a4e',
                tabBarLabelStyle: styles.tabBarLabel, 
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: ({ color }) => (
                        <View className={`${color === '#007BFF' && 'border-t-2 border-[#007BFF]'}  flex-1 flex justify-center items-center w-full`
                        }>
                            <MaterialCommunityIcons name="home-minus" size={28} color={color} />
                        </View>
                    ),
                    tabBarLabelStyle: { fontSize: 16, fontWeight: '600' }
                }}
            />
            <Tabs.Screen
                name="search/index"
                options={{
                    tabBarIcon: ({ color }) => (
                        <View className={`${color === '#007BFF' && 'border-t-2 border-[#007BFF]'}  flex-1 flex justify-center items-center w-full`}>
                            <MaterialCommunityIcons name="file-document-outline" size={28} color={color} />
                        </View>
                    ),
                    tabBarLabelStyle: { fontSize: 16, fontWeight: '600' }
                }}
            />
            <Tabs.Screen
                name="report/index"
                options={{
                    tabBarIcon: ({ color }) => (
                        <View className={`${color === '#007BFF' && 'border-t-2 border-[#007BFF]'}  flex-1 flex justify-center items-center w-full`}>
                            <MaterialCommunityIcons name="credit-card-outline" size={28} color={color} />
                        </View>
                    ),
                    tabBarLabelStyle: { fontSize: 16, fontWeight: '600' },
                }}
            />
            <Tabs.Screen
                name="notification/index"
                options={{
                    tabBarIcon: ({ color }) => (
                        <View className={`${color === '#007BFF' && 'border-t-2 border-[#007BFF]'}  flex-1 flex justify-center items-center w-full`}>
                            <MaterialCommunityIcons name="wallet-outline" size={28} color={color} />
                        </View>
                    ),
                    tabBarLabelStyle: { fontSize: 16, fontWeight: '600' }
                }}
            />
        </Tabs>
    );
};

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#fff', 
        borderTopWidth: 1, 
        borderTopColor: '#e0e0e0', 
        height: 70, 
    },
    tabBarLabel: {
        fontSize: 12, 
        fontWeight: '600', 
    },
});

export default TabsLayout;
