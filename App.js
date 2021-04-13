import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>  
      <View >
        {/* header */}
        <View style = {{flexDirection: 'row'}}>
          <Text style={{ fontSize: 30, marginRight: 30 }}>Player1: <Text style={{ fontSize: 30, fontWeight: 'bold' }}>X</Text></Text>
          <Text style={{ fontSize: 30, marginLeft: 30 }}>Player2: <Text style={{ fontSize: 30, fontWeight: 'bold' }}>O</Text></Text>
        </View>


        {/* rows */}
        <View style={{ width: 50, flexDirection: 'row'}}>
          <Pressable style={styles.btn} onPress="">
            <Text style={styles.btntext}>X</Text>
          </Pressable>
          <Pressable style={styles.btn} onPress="">
            <Text style={styles.btntext}>X</Text>
          </Pressable>
          <Pressable style={styles.btn} onPress="">
            <Text style={styles.btntext}>X</Text>
          </Pressable>
        </View>
        <View style={{ width: 50, flexDirection: 'row'}}>
          <Pressable style={styles.btn} onPress="">
            <Text style={styles.btntext}>X</Text>
          </Pressable>
          <Pressable style={styles.btn} onPress="">
            <Text style={styles.btntext}>X</Text>
          </Pressable>
          <Pressable style={styles.btn} onPress="">
            <Text style={styles.btntext}>X</Text>
          </Pressable>
        </View>
        <View style={{ width: 50, flexDirection: 'row'}}>
          <Pressable style={styles.btn} onPress="">
            <Text style={styles.btntext}>X</Text>
          </Pressable>
          <Pressable style={styles.btn} onPress="">
            <Text style={styles.btntext}>X</Text>
          </Pressable>
          <Pressable style={styles.btn} onPress="">
            <Text style={styles.btntext}>X</Text>
          </Pressable>
        </View>
      </View> 

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: 100,
    height: 100,
    margin: 2,
    backgroundColor: "lightblue",
    alignItems: 'center',
    justifyContent: 'center',
  },
  btntext: {
    fontFamily: "Calibri",
    // fontWeight: "bold",
    fontSize: 40

  }
});
