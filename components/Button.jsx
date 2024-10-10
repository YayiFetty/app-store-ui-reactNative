import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from "twrnc"
const Button = ({title}) => {
  return (
    
    <TouchableOpacity style={tw` text-xl bg-blue-500 px-5 text-white p-3 mx-1 rounded-full transition`}>
    {" "}
    {title}
  </TouchableOpacity>
    
  )
}

export default Button