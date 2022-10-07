import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View, ScrollView } from 'react-native';
import {Input, Icon} from 'react-native-elements';
import {collection, addDoc, getDocs, deleteDoc, getFirestore, doc, updateDoc} from 'firebase/firestore';
import { firebaseConfig } from '../firebase_config';
import  {firestore}  from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { NumberInput } from 'native-base';

import { AntDesign } from '@expo/vector-icons';
import { Button } from "@rneui/themed";

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default function App () {

    const [data, setdata] = useState({
      nproducto:"",
      desc:"",
      precio:"",
    });

    const [id, setid] = useState("");

    const changeText = (key, value) => {
      setdata({...data, [key]: value});
    }

    const Agregar = () => {
      if(data.nproducto == '' || data.desc == '' || data.precio == ''){
        Alert.alert('Favor de llenar todos los campos')
      }else{
        onSend(data);
        Alert.alert("Mensaje", "Producto agregado")
      }
    }

    const editar = async () => {
      const querySnapshot = await getDocs(collection(db, "usuarios"));
      querySnapshot.forEach((doc) => {
        if (doc.data().nproducto === data.nproducto){
          setid(doc.id);
        }
      });

      if(id === '') {
        Alert.alert("Mensaje", "El producto no existe");
      } else {
        const docRef = doc(db, "usuarios", id);
        updateDoc( docRef, {
          nproducto: data.nproducto,
          desc: data.desc,
          precio: data.precio,
        });
        Alert.alert("Mensaje", "Producto actualizado");
      }
    }
    
    const eliminar = async () => {
      const querySnapshot = await getDocs(collection(db, "usuarios"));
      querySnapshot.forEach((doc) => {
        if (doc.data().nproducto === data.nproducto){
          setid(doc.id);
        }
      });
      
      if ( id === '' ){
        Alert.alert("Mensaje", "Producto no encontrado")
      } else {
        const docRef = doc(db, "usuarios", id);
        deleteDoc(docRef);
        Alert.alert("Mensaje", "Producto eliminado")
      }
    }

    const onSend = async() => {
      const docRef = await addDoc(collection(db, 'usuarios/'),data);
    }

    const allUsers = async() => {
      const querySnapshot = await getDocs(collection(db, "usuarios"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
    }

  return (<>
    <View style={{textAlign:'center', width:400}}>
      <Text style={{fontSize:30, padding:30, marginTop:50}}>Taqueria valentin LGBT</Text>
    </View>
    <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
      <View>
        <Input placeholder='Nombre del taco' style={styles.input} onChangeText={(value) => changeText('nproducto', value)} value={data.username}/>
      </View>
      <View>
        <Input placeholder='Descripción del taco' style={styles.input} onChangeText={(value) => changeText('desc', value)}/>
      </View>
      <View>
        <Input placeholder='Precio del taco' keyboardType='numeric' style={styles.input} onChangeText={(value) => changeText('precio', value)} />
      </View>
      <View style={{padding:10}}>
        <Button radius='lg' color='primary' onPress={() => {Agregar()}} title="Agregar producto"/>
      </View>
      <View style={{padding:10}}>
        <Button radius='lg' color='secondary' onPress={() => {allUsers();}} title="Ver productos"/>
      </View>
      <View style={{padding:10}}>
        <Button radius='lg' color='error' onPress={() => {eliminar()}} title="Eliminar producto"/>
      </View>
      <View style={{padding:10}}>
        <Button radius='lg' color='warning' onPress={() => {editar()}} title="Editar producto"/>
      </View>
      {/* <View style={{padding:10}}>
        <Button color='red' onPress={() => {Eliminar();}} title="Eliminar"/>
      </View> */}
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