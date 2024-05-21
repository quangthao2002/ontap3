import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { Avatar, Card } from "react-native-paper";

const Screen3 = () => {
  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  useEffect(() => {
    fetch("https://655d45319f1e1093c599283e.mockapi.io/shop")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    fetch("https://654ad47d5b38a59f28ee4431.mockapi.io/shop")
      .then((response) => response.json())
      .then((json) => setData2(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" ,marginTop:4,gap:5 }}>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ width: 30, height: 30 }}
            source={require("./Data/Icon Button 2.jpg")}
          />
          <Text> For you</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ width: 30, height: 30 }}
            source={require("./Data/Icon Button 1.jpg")}
          />
          <Image
            style={{ width: 30, height: 30 }}
            source={require("./Data/Avatar 5.jpg")}
          />
        </View>
      </View>

      <View>
        <Card style={{ gap: 5 }}>
   
          <Card.Content>
            <Text variant="titleLarge">Monday, September 12</Text>
            <Text variant="bodyMedium">Top Stories</Text>
          </Card.Content>
          <Card.Cover
            source={{
              uri: "https://lab222222.s3.ap-southeast-1.amazonaws.com/Image+37.jpg",
            }}
            style={{ margin: 10 }}
          />
          <View style={{ flexDirection: "column", gap: 3 ,marginLeft:8}}>
            <Text>Development-level warnings: ON.</Text>
            <Text>
              Development-level warnings: ON. Performance optimizations: OFF.
            </Text>
            <Text style={{color:'gray'}}>3h ago</Text>
          </View>
        </Card>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <View style={styles.container}>
              <View style={styles.info}>
                <Text>{item.name}</Text>
                <Text>{item.location}</Text>
                <Text>{item.container}</Text>
              </View>
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
            </View>
          </Card>
        )}
      />
      <Card >
        <View style={{flexDirection:'column' ,margin:10}}>
          <Image
            source={{
              uri: "https://lab222222.s3.ap-southeast-1.amazonaws.com/Image+42.jpg",
            }}
            style={{ width: 400, height: 200 }}
          />
          <View>
            <Text>Sporty.co</Text>
            <Text>Under dog team shock the word with stunning</Text>
            <Text style={{ color: "gray" }}>5h ao</Text>
          </View>www
        </View>
      </Card>

      <FlatList
        data={data2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card>
            <View style={{flexDirection:'column', margin:10}} >
              <Image
                source={{ uri: item.avatar }}
                style={{ width: 400, height: 200 }}
                />
                <Text>{item.name}</Text>
                <Text>{item.member}</Text>
                <Text style={{color:'gray'}}>yesterday</Text>
            </View>
          </Card>
        )}
      />
     
     <View style={{margin:5}}>
     <Image
            style={{ width: 400, height: 50 }}
            source={require("./Data/Tab Bar Menu 3.jpg")}
          />
     </View>

    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  info: {
    flex: 1,
  },
  avatar: {
    width: 100,
    height: 100,
  },
});
export default Screen3;
