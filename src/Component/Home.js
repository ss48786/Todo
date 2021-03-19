import React from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView
} from "react-native";
import store from "../store";


// import types from './types';
 import {ADD,DELETE}from './action'
// import reducer from "../reducer";




export default function Home(props) {
  const { data, onButtonPress} = props;
  return (
    <View>
     <TouchableOpacity onPress={() => onButtonPress(data.id)}>
        <Text>{data.name}</Text>
      
        </TouchableOpacity>
    </View>
   
  );
}



