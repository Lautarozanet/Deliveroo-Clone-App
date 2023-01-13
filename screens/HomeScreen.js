import { View, Text, SafeAreaView,Image, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import {
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassCircleIcon,
    AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";

const HomeScreen = () => {
    const navigation=useNavigation();

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        });
    },[]);

  return (
    <SafeAreaView className="bg-white pt-5">
         <View>
            <Text></Text>
            </View>
      <Text className="text-red-500">
        {/* header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
            <Image
            source={{
                uri:"https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            />
           
            <View className="flex-1">
                <Text className="font-bold text-gray-400 text-xs">
                    Deliver Now!
                    </Text>
                <Text className="font-bold text-xl">
                    Current Location
                    <ChevronDownIcon size={20} color="#00CCBB"/>
                    </Text>
            </View>
            <UserIcon size={35} color="#00CCBB"/>
        </View>
        
            {/* search */}
            <View>
                <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
                    < MagnifyingGlassCircleIcon color="gray" size={20}/>
                    <TextInput placeholder='Restaurants and cuisines'
                    keyboardType='default'/>
                </View>

                <AdjustmentsVerticalIcon color="#00CCBB"/>
            </View>
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;