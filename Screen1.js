import React from "react";
import { Button, Image, Pressable, View } from "react-native";
import { Text } from "react-native";

export const Screen1 = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        style={{ width: 200, height: 200 }}
        source={require("./Data/Image 32.jpg")}
      />
      <Text style={{marginBottom:100, marginTop:10, fontWeight:'bold' }}>The Essential</Text>
    
    </View>
  );
};
