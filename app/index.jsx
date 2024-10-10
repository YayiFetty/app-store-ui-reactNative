import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import Star from "../assets/icons/star";
import Download from "../assets/icons/download";
import Topbar from "../components/Topbar";
import Title from "../components/Title";
import tw from "twrnc"
import Buttons from "../components/Buttons";
import FeaturedText from "../components/FeaturedText";
import Cards from "../components/Cards";
import { SafeAreaView } from "react-native-safe-area-context";
import TopActionG from "../components/TopActionG";
import MiniCards from "../components/MiniCards";
const Index = () => {
  return (
   
    <ScrollView style={tw`flex-1 gap-5 p-5`} >
    <Topbar/>
    <Title/>
    <Buttons/>
    <FeaturedText title="Featured Games"/>
    <Cards/>
    <TopActionG/>
    <MiniCards/>
  
</ScrollView>
   
  );
};

export default Index;
