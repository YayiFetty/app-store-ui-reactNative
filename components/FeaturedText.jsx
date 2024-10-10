import { View, Text } from 'react-native'
import React from 'react'
import tw from "twrnc"
const FeaturedText = ({title}) => {
  return (
    <View>
    <Text style={tw`font-bold text-xl my-3`}>{title}</Text>
    </View>
  )
}

export default FeaturedText