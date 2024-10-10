import { View, Text } from 'react-native'
import React from 'react'
import tw from "twrnc";
const TopActionG = () => {
  return (
    <View style={tw`flex-row justify-between items-center my-3`}>
    <Text style={tw` font-bold text-xl`}>Top Action Games</Text>
    <Text style={tw`font-bold text-green-500`}>See all</Text>
  </View>
  )
}

export default TopActionG