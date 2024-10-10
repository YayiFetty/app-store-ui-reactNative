import { View, Text } from 'react-native'
import React from 'react'
import tw from "twrnc"
import { ScrollView } from 'react-native-web'
import Button from './Button'
const Buttons = () => {
  return (
   <View>
   <ScrollView horizontal style={tw `mb-3`}>
   <Button title="Action"/>
   <Button title="Adventure"/>
   <Button title="Bike Race"/>
   <Button title="Game"/>
   <Button title="Mind Map"/>
   <Button title="Bank"/>
   <Button title="Car Race"/>
   <Button title="Subway"/>
 </ScrollView>
   </View>
  )
}

export default Buttons