import React from "react";
import { Pressable, Text, View } from "react-native";
import { TextInput } from "react-native-paper";

const Screen2 = () => {
  const [text, setText] = React.useState("");

  return (
    <View style={{ gap: 4 }}>
      <View style={{ marginTop: 20, marginBottom: 10, alignItems: "center" }}>
        <Text style={{ color: "black" ,fontWeight:'bold'}}>Sign in</Text>
        <Text>By continuing. yu agree to our</Text>
      </View>
      <label style={{marginLeft:6}}>Email or phone number</label>
      <TextInput
        mode="outlined"
        placeholder="Enter email"
        style={{ width: 300,margin:10 }}
      />

      {/* <Text style={{ color: "blue" }}> forgot password?</Text> */}
      <Pressable style={{backgroundColor:'blue',width:350,height:50,borderRadius:5,borderWidth:1, marginBottom:10,margin:10}}>
        <Text style={{color:"white",textAlign:'center'}}>Continue with password</Text>
      </Pressable>
      <Pressable style={{color:"blue",width:350,height:50,borderRadius:5,borderWidth:1 ,margin:10}} >
        <Text style={{color:"blue",textAlign:'center'}}>Send one-time passcode</Text>
      </Pressable>
      <Text style={{margin:5}}>--------------------------------  Or  ------------------------------</Text>

    <View style={{marginTop:10,gap:10}}>
    <Pressable style={{backgroundColor:'gray',width:350,height:50,borderRadius:5,borderWidth:1, marginBottom:10,margin:10}}>
        <Text style={{color:"white",textAlign:'center'}}>Continue with Apple</Text>
      </Pressable>
      <Pressable style={{backgroundColor:'red',width:350,height:50,borderRadius:5,borderWidth:1, marginBottom:10,margin:10}}>
        <Text style={{color:"white",textAlign:'center'}}>Continue with Google</Text>
      </Pressable>
      <Pressable style={{backgroundColor:'blue',width:350,height:50,borderRadius:5,borderWidth:1, marginBottom:10,margin:10}}>
        <Text style={{color:"white",textAlign:'center'}}>Continue with FaceBook</Text>
      </Pressable>
    </View>
    </View>
  );
};

export default Screen2;
