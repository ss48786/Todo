

import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  Pressable,
  Image,
  Alert,
  FlatList,
} from 'react-native';
import Newmodal from './src/Component/Newmodal';
 import{ADD,DELETE,UPDATE} from './src/action'
 import store from './src/store'
 import reducer from './src/reducer';

 

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      title: '',
      description: '',
     
    };
  }

  // add = () => {
  //   console.log('hello');
  //   const obj = {};
  //   obj['content'] = 'nbe';
  //   store.dispatch(ADD(obj));
  // };

  onchangetext = value => {
    const {title} = this.state;

    this.setState({
      title: value,
    });
  };

  _onchangetext = value => {
    const {description} = this.state;

    this.setState({
      description: value,
    });
  };

  onAdd = (title, desc) => {
    store.dispatch(ADD(title, desc));
  };

  openModal = visible => {
    this.setModalVisible(visible);
  };

  setModalVisible = visible => {
    this.setState({
      modalVisible: visible,
    });
  };

  renderItem = ({item}) => {
    return (
      <View
        style={{
          backgroundColor: '#f0f4f7',
          marginHorizontal: 10,
          flexDirection: 'column',
        }}>
        <Text
          style={{
            marginTop: 10,
            fontWeight: 'bold',
            fontSize: 20,
            marginHorizontal: 5,
          }}>
          {item.message}
        </Text>
        <Text style={{marginHorizontal: 5}}>{item.status}</Text>

        <Text style={{marginVertical: 10, marginHorizontal: 5}}>
          {item.description}
        </Text>
      </View>
      // 
    );
  };

  render() {
     const {modalVisible, title, description} = this.state;
      const {message} = store.getState();
     console.log(store.getState());

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
       
        <View
          style={{
            flexDirection: 'row',
            minHeight: 70,
            backgroundColor: 'white',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>To-Do List</Text>

          <TouchableOpacity onPress={() => this.openModal(true)}>
            <Image
              style={styles.editLogo}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm6D4RSQSTfL4f4VZQNtvM40wGPPZwtfhYZA&usqp=CAU',
              }}
            />
           
          </TouchableOpacity>
        </View>

        {/* <FlatList
          keyExtractor={item => item.id.toString()}
          data={store.getState().todo}
          renderItem={({ item }) => (
//               <Home
//                 data={item}
//                 onButtonPress={this.onButtonPress}
        /> */}
 <FlatList
            data={store.getState().Task}
            
            
            keyExtractor={item => item.id.toString()}
            renderItem={this.renderItem}
            
        //  renderItem={({ item }) => (
        //   <Home
        //      data={item}
             
                
               
        //   />
              
        //  )}
         />   
       

       <Newmodal
          modalVisible={modalVisible}
          setModalVisible={this.setModalVisible}
          onchangetext={this.onchangetext}
          _onchangetext={this._onchangetext}
          onAdd={this.onAdd}
          title={title}
          desc={description}
        />   
      </View>
    );
  }
}



const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    height: 80,
  },
  instagramLogo: {
    height: 45,
    width: 200,
    resizeMode: 'contain',
  },
  dmLogo: {
    height: 35,
    width: 100,
    resizeMode: 'contain',
  },
  plusLogo: {
    height: 55,
    width: 100,
    resizeMode: 'contain',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'black',
  },
  editLogo: {
    width: 30,
    height: 30,
  },
  dpLogo: {
    width: 65,
    height: 65,
    borderRadius: 50,
  },
  chatRow: {
    flex: 10,
    flexDirection: 'row',
    margin: 10,
  },
  checkbox: {
    alignSelf: 'center',
  },
  dp: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameHeading: {
    flex: 7.5,
    justifyContent: 'center',
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 0.2,
  },
  freeSpace: {
    flex: 0.5,
  },
  firstLineinnameHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default App;