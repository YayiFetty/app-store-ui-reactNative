import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import tw from "twrnc"
import Heart from "../assets/icons/heart";
import Star from "../assets/icons/star";
import Card from './Card';

const Cards = () => {
  return (
    <View>
    <ScrollView style={tw `mb-5`} horizontal>
    <Card source={require('../assets/images/freeFire.png')} name="Free Fire"/>
    <Card source={require('../assets/images/angryBirds.png')} name="Angry Birds"/>
    <Card source={require('../assets/images/altosAdventure.png')} name="Altos Adventure"/>
    <Card source={require('../assets/images/zoobaGame.png')} name="Zooba Game"/>
    <Card source={require('../assets/images/freeFire.png')} name="Free Fire"/>
    
  </ScrollView>
    </View>
  )
}

export default Cards