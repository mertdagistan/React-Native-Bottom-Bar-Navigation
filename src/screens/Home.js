import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

export default function Home({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: 22, fontWeight: 'bold'}}> Home Screen </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Detail')}
        style={styles.button}>
        <Text style={styles.buttonTxt}>Detail</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#ECDBBA',
    padding: 10,
    width: 200,
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 20,
  },
  buttonTxt: {
    color: 'black',
    fontSize: 20,
  },
});
