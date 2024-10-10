
import React from "react";
import { ScrollView } from "react-native-web";
import MiniCard from "./MiniCard";

const MiniCards = () => {
  return (
    <ScrollView horizontal >
        <MiniCard source={require('../assets/images/frag.png')} title="Frage"/>
        <MiniCard source={require('../assets/images/zooba.png')} title="Zooba"/>
        <MiniCard source={require('../assets/images/subway.png')} title="Subway"/>
    </ScrollView>
  );
};

export default MiniCards;
