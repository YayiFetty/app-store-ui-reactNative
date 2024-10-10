import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from "twrnc"
import Heart from "../assets/icons/heart";
import Star from "../assets/icons/star";
const Card = ({name, source}) => {
  return (
    <View style={tw`h-[220px] w-[280px] mr-5 bg-blue-200`}>
    <Image
      source={source}
      style={tw`h-[100%] w-[100%] rounded-xl`}
    />
    <View
      style={tw`bg-[rgba(000,000,000,0.3)] h-[100%] w-[100%] rounded-xl absolute`}
    ></View>
    <View style={tw` absolute top-5 right-5 `}>
      <Heart />
    </View>
    <View style={tw`absolute bottom-5 left-5`}>
      <View style={tw`flex-row`}>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </View>
      <Text style={tw`text-white text-2xl`}>{name}</Text>
      <View style={tw`flex-row`}>
        <Text style={tw`text-white`}>100k downloads</Text>
      </View>
    </View>
  </View>
  )
}

export default Card