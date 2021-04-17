import { StatusBar } from 'expo-status-bar';

import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";


var board = [["", "", ""], ["", "", ""], ["", "", ""]]

export default function App() {

  const [getTurn, setTurn] = useState(true)
  const [getWinner, setWinner] = useState("")
  const [modalVisible, setModalVisible] = useState(false);

  // const [getboard, setboard] = useState("")
  // const [getDisplay, setDisplay] = useState()


  const nexTurn = () => {
    if (getTurn){
      return("Player 1")
    }
    else{
      return("Player 2")
    }
  }

  // New Game 
  const newGame = () => {
    board = [["", "", ""], ["", "", ""], ["", "", ""]]
    setWinner("")
    setModalVisible(false)
    setTurn(true)
  }

  

  // Win conditions 
  const win = (w) => {
    for (var i = 0; i <= 2; i++) {
      if (board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][0] != ""){
        setWinner(w)
        setModalVisible(true)
      }
    }
    for (var j = 0; j <= 2; j++) {
      if (board[0][j] == board[1][j] && board[1][j] == board[2][j] && board[0][j] != ""){
        setWinner(w)
        setModalVisible(true)
      }
    }
    if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != ""){
      setWinner(w)
      setModalVisible(true)

    }
    else if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != ""){
      setWinner(w)
      setModalVisible(true)

    }
    else{
      var indexCount = 0
      for(var x = 0; x <= 2; x++){
        for(var y = 0; y <= 2; y++){
          if(board[x][y] != ""){
            indexCount += 1
          }
        }
      }
      if (indexCount == 9){
        alert("draw")
      }
    }
      
  }

  // Pressable function 
  const ButtonPress = (a, b) => {
    if (board[a][b] == "") {
      if (getTurn) {
        board[a][b] = "❌";
        setTurn(false);
        win("❌");

      }
      else {
        board[a][b] = "⭕";
        setTurn(true);
        win("⭕");
      }
    }
  }



  return (

    <View style={styles.container}>

      <View >
        {/* header */}
        <View style={{ flexDirection: 'row' }}>
          <Text style={{fontSize: 30, marginRight: 30, fontWeight: "bold", fontSize: 20, marginBottom:20}}>Player 1: <Text style={{fontSize: 30, fontWeight: 'bold' }}>❌</Text></Text>
          <Text style={{fontSize: 30, marginLeft: 30, fontWeight: "bold", fontSize: 20, marginBottom:20}}>Player 2: <Text style={{ ontSize: 30, fontWeight: 'bold' }}>⭕</Text></Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 30, fontWeight: "bold", fontSize: 20, marginBottom:20}}>Next turn: {nexTurn()}</Text>
        </View>


        {/* rows */}
        <View>
          <View style={{ width: 50, flexDirection: 'row' }}>
            <Pressable style={styles.btn} onPress={() => {ButtonPress(0, 0)}}>
              <Text style={styles.btntext}>{board[0][0]}</Text>
            </Pressable>
            <Pressable style={styles.btn} onPress={() => {ButtonPress(0, 1)}}>
              <Text style={styles.btntext}>{board[0][1]}</Text>
            </Pressable>
            <Pressable style={styles.btn} onPress={() => {ButtonPress(0, 2)}}>
              <Text style={styles.btntext}>{board[0][2]}</Text>
            </Pressable>
          </View>

          <View style={{ width: 50, flexDirection: 'row' }}>
            <Pressable style={styles.btn} onPress={() => {ButtonPress(1, 0)}}>
              <Text style={styles.btntext}>{board[1][0]}</Text>
            </Pressable>
            <Pressable style={styles.btn} onPress={() => {ButtonPress(1, 1)}}>
              <Text style={styles.btntext}>{board[1][1]}</Text>
            </Pressable>
            <Pressable style={styles.btn} onPress={() => { ButtonPress(1, 2)}}>
              <Text style={styles.btntext}>{board[1][2]}</Text>
            </Pressable>
          </View>

          <View style={{ width: 50, flexDirection: 'row' }}>
            <Pressable style={styles.btn} onPress={() => {ButtonPress(2, 0)}}>
              <Text style={styles.btntext}>{board[2][0]}</Text>
            </Pressable>
            <Pressable style={styles.btn} onPress={() => {ButtonPress(2, 1)}}>
              <Text style={styles.btntext}>{board[2][1]}</Text>
            </Pressable>
            <Pressable style={styles.btn} onPress={() => {ButtonPress(2, 2)}}>
              <Text style={styles.btntext}>{board[2][2]}</Text>
            </Pressable>
          </View>
        </View>
      </View>

      {/* Modal */}
      <View style={styles.centeredView}>
        <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => {setModalVisible (!modalVisible);}}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Winner: {getWinner}</Text>
              <Pressable style={[styles.button, styles.buttonClose]} onPress={() => {newGame()}}>
                <Text style={styles.textStyle}>Play Again</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
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
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
