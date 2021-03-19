

// import React, {Component} from 'react';



// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
  
//   FlatList,
//   TextInput,
//   TouchableOpacity,
//   Alert,
//   Modal,
 
  
// } from 'react-native';
// import Button from './src/Component/Button';
// import Home from './src/Component/Home';
// import Newmodal from './src/Component/Newmodal';
// import store from'./src/store'

// import Todo from './src/Todo';
// import {ADD,DELETE} from './src/action' 








// export default class App extends Component{
  
// constructor(props){
//   super(props);
//   this.state={
    
//     title: '',
//       description: '',
    
    
    
//   }

  
// }
// add = () => {
     
//       const obj = {};
//       obj['content'] = 'nbe';
//       store.dispatch(addTodo(obj));
//     };

//     onchangetext = value => {
//           const {title} = this.state;
      
//           this.setState({
//             title: value,
//           });
//         };
      
//         _onchangetext = value => {
//           const {description} = this.state;
      
//           this.setState({
//             description: value,
//           });
//         };
      
//         onAdd = (title, desc) => {
//           store.dispatch(addTodo(title, desc));
//         };
  

// //


//   render(){
   
// // const { value ,  emptyArray} =this.state;
// const{dispatch,getState}=store;
// // console.log(store.getState().Task)
//   return(
   
//     <View style={{flex:1, margin:100}}> 
   

//    <FlatList
//           keyExtractor={item => item.id.toString()}
//           data={store.getState().todo}
//           renderItem={this.renderItem}
//         />
    
      
    // <FlatList
    //         data={store.getState().Task}
    //         showsVerticalScrollIndicator={false}
            
    //         keyExtractor={(item) => item.id}
    //         ItemSeparatorComponent={() => <View style={{ marginBottom: 10 }} />
    //       }
    //         renderItem={({ item }) => (
    //           <Home
    //             data={item}
    //             onButtonPress={this.onButtonPress}
                
               
    //           />
              
    //          )}
    //       />  
//           <Button name="Edit"/>
//           <Button name="Delete" />
//           <View style={{borderColor:"black"}}>
//             {/* <Newmodal
//             onChangeText={this.onChangeText}
//             onUpdate={this.onUpdate}
//             // onChangeText={this.onChangeText}
           
//             message={message}/> */}



//             {/* <Newmodal open={<TextInput
//         style={styles.input} onChangeText={value => onChangeText(value)}
        
        
//         // value={text}
//       />}
      
//         onUpdate={this.onUpdate}
//         onChangeText={this.onChangeText}
//         message={message}/> */}
        


        
//           {/* <TextInput
//         style={styles.input}
//         onChangeText={value=>this.onChangeText(value)}
        
//         // value={text}
//       /> */}



//       <TouchableOpacity onPress={()=>this.onUpdate(onChangeText)} style={{marginTop:20}}>
      
//       </TouchableOpacity>
//           </View>


//     </View>
    

//   );
// }
// }


// const styles = StyleSheet.create({
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//   },
// });
