import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from "twrnc"
import Star from "../assets/icons/star";
import Download from "../assets/icons/download";
import Buttons from './Buttons';
import Button from './Button';

const MiniCard = ({source, title}) => {
  return (
    <View
    style={tw` w-[300px] h-[150px] bg-blue-300 p-3 mr-3 gap-3 rounded-xl flex-row justify-between items-center mb-3`}
  >
    <Image
      source={source}
      style={tw`h-20 w-20 rounded-xl`}
    />
    <View style={tw` flex-col gap-1 `}>
      <Text style={tw`text-2xl font-bold`}>{title}</Text>

      <View style={tw`flex-row gap-3`}>
        <View style={tw`flex-row items-center gap-2`}>
          <Star />
          <Text style={tw`text-white`}>4.5</Text>
        </View>
          <View style={tw`flex-row items-center gap-2`}>
            {" "}
            <Download/>
            <Text style={tw`text-white`}>10M</Text>
          
        </View>
      </View>
    </View>
        <Button title="open"/>
  </View>
  )
}

export default MiniCard