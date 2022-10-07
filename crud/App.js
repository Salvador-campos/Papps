import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import {Input} from 'react-native-elements';
import {collection, addDoc, doc, getDoc, getDocs, getFirestore} from 'firebase/firestore';
import {firebaseConfig} from './db/firebase_config';
import { getDatabase, ref, onValue, set } from 'firebase/database';
import { initializeApp } from 'firebase/app';

import Login from './vistas/login';
import Signup from './vistas/Signup';
import { padding } from 'styled-system';

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default function App () {

    const [data, setdata] = useState({
      username:"",
      email:"",
      psw:"",
      createdAt: new Date(),
    });

    const changeText = (key, value) => {
      setdata({...data, [key]: value});
    }

    const Agregar = () => {
      if(data.psw != data.psw){
        Alert.alert('La contraseña debe de coincidir...')
      }else if(data.username == '' || data.email == ''){
        Alert.alert('Nombre de usuario y/o emali, son obligatorios.!')
      }else{
        onSend(data);
      }
    }

    const onSend = async() => {
      const docRef = await addDoc(collection(db, 'usuarios/'),data);
    }

    /*const onUsersDB = async (id) => {
      const docRef = doc(db, "usuarios",id);
      const docSnap = await getDoc(docRef);

      if( docSnap.exists()){
        console.log("Document data:", docSnap.data());
      } else {
        console.log("No such document!");
      }
    }*/

    const allUsers = async() => {
      const querySnapshot = await getDocs(collection(db, "usuarios"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });

    }


  return (<>
    <View style={{textAlign:'center', width:200}}>
      <Text style={{fontSize:30, padding:30}}>CRUD</Text>
    </View>
    <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
      <View>
        <Input placeholder='Nombre usuario' style={styles.input} onChangeText={(value) => changeText('username', value)} value={data.username}/>
      </View>
      <View>
        <Input placeholder='Correo electrónico' style={styles.input} onChangeText={(value) => changeText('email', value)}/>
      </View>
      <View>
        <Input placeholder='Contraseña' style={styles.input} onChangeText={(value) => changeText('psw', value)} secureTextEntry={true}/>
      </View>
      <View>
        <Input placeholder='Confirma contraseña' style={styles.input} onChangeText={(value) => changeText('psw2', value)} secureTextEntry={true}/>
      </View>
      <View style={{padding:10}}>
        <Button onPress={() => {Agregar()}} title="Enviar datos"/>
      </View>
      <View style={{padding:10}}>
        <Button color='red' onPress={() => {allUsers();}} title="Ver datos"/>
      </View>
    </ScrollView></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
