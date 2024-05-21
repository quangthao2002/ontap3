import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Screen1 } from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
         {/* <Screen1  />  */}
         {/* <Screen2/>  */}
        <Screen3/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
