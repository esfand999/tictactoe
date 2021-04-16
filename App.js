import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";


var board = [["", "", ""], ["", "", ""], ["", "", ""]]

export default function App() {

  const [getTurn, setTurn] = useState(true)
  const [modalVisible, setModalVisible] = useState(false);
  // const [getboard, setboard] = useState("")
  // const [getDisplay, setDisplay] = useState()

  const win = () => {
    for (var i = 0; i < 2; i++) {
      if (board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][0] != "")
        alert("lets gooooo")
    }
    for (var j = 0; j < 2; j++) {
      if (board[0][j] == board[1][j] && board[1][j] == board[2][j] && board[0][j] != "")
        alert("lets gooooo")
    }
    if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != "")
      alert("lets gooooo")
    else if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != "")
      alert("lets gooooo")
    
  }

  const ButtonPress = (a, b) => {
    if (board[a][b] == "") {
      if (getTurn) {
        board[a][b] = "❌";
        setTurn(false);
      }
      else {
        board[a][b] = "⭕";
        setTurn(true);
      }
    }
    win();
  }



  return (

    <View style={styles.container}>
      <View >

        {/* header */}
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 30, marginRight: 30, fontWeight: "bold", fontSize: 20, marginBottom:20}}>Player 1: <Text style={{ fontSize: 30, fontWeight: 'bold' }}>❌</Text></Text>
          <Text style={{ fontSize: 30, marginLeft: 30, fontWeight: "bold", fontSize: 20, marginBottom:20}}>Player 2: <Text style={{ fontSize: 30, fontWeight: 'bold' }}>⭕</Text></Text>
        </View>


        {/* rows */}
        <View>
          <View style={{ width: 50, flexDirection: 'row' }}>
            <Pressable style={styles.btn} onPress={() => { ButtonPress(0, 0) }}>
              <Text style={styles.btntext}>{board[0][0]}</Text>
            </Pressable>
            <Pressable style={styles.btn} onPress={() => { ButtonPress(0, 1) }}>
              <Text style={styles.btntext}>{board[0][1]}</Text>
            </Pressable>
            <Pressable style={styles.btn} onPress={() => { ButtonPress(0, 2) }}>
              <Text style={styles.btntext}>{board[0][2]}</Text>
            </Pressable>
          </View>

          <View style={{ width: 50, flexDirection: 'row' }}>
            <Pressable style={styles.btn} onPress={() => { ButtonPress(1, 0) }}>
              <Text style={styles.btntext}>{board[1][0]}</Text>
            </Pressable>
            <Pressable style={styles.btn} onPress={() => { ButtonPress(1, 1) }}>
              <Text style={styles.btntext}>{board[1][1]}</Text>
            </Pressable>
            <Pressable style={styles.btn} onPress={() => { ButtonPress(1, 2) }}>
              <Text style={styles.btntext}>{board[1][2]}</Text>
            </Pressable>
          </View>

          <View style={{ width: 50, flexDirection: 'row' }}>
            <Pressable style={styles.btn} onPress={() => { ButtonPress(2, 0) }}>
              <Text style={styles.btntext}>{board[2][0]}</Text>
            </Pressable>
            <Pressable style={styles.btn} onPress={() => { ButtonPress(2, 1) }}>
              <Text style={styles.btntext}>{board[2][1]}</Text>
            </Pressable>
            <Pressable style={styles.btn} onPress={() => { ButtonPress(2, 2) }}>
              <Text style={styles.btntext}>{board[2][2]}</Text>
            </Pressable>
          </View>
        </View>
      </View>

      {/* <View style={styles.centeredView}>
        <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => {Alert.alert("Modal has been closed."); setModalVisible (!modalVisible);}}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
      </View> */}
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
    backgroundColor: "#003999",
    alignItems: 'center',
    justifyContent: 'center',
  },
  btntext: {
    fontFamily: "Calibri",
    fontSize: 40
  }
});
