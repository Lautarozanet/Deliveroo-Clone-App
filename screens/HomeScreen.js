import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'


const HomeScreen = () => {
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        });
    },[]);

  return (
    <SafeAreaView>
      <Text classname="text-red-500">HomeScreen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen