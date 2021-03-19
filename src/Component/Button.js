import React, {Component} from "react";
import{Text,TouchableOpacity,View} from "react-native";
function Button(props){
    const{name,onButtonPress}=props;
    return(

<View style={{flex:1}}>
<TouchableOpacity onPress={onButtonPress}>
<Text>{name}</Text>
</TouchableOpacity>

</View>
    );
}
export default Button;