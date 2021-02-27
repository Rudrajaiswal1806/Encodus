/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import { 
  Root,
  Container,
  Header,
  Button,
  Content,
  Item,
  Icon,
  Input,
  Left,
  List,
  ListItem,
  Body, 
  Right, 
  Title,
  Card,
  CardItem
   } from 'native-base';

   import { SliderBox } from "react-native-image-slider-box";

   const text1 = [
    {
      
      text: "SubCategory",
      text2: "Product"
    },
    {
      
      text: "SubCategory",
      text2: "Product"
    },
    {
      
      text: "SubCategory",
      text2: "Product"
    },
    {
      
      text: "SubCategory",
      text2: "Product"
    },
  ];
  

const App: () => React$Node = () => {
  
return(
<Container >
<ScrollView>
          <View iosBarStyle={"light-content"} androidStatusBarColor="#4C4C49" 
           style={{backgroundColor:'#264653',flexDirection:'row',justifyContent:'space-between',paddingVertical:10,paddingHorizontal:10}}>
            <Text style={{fontSize:20,fontWeight:'bold',color:'#fff'}}>
              Albalad Market Logo
            </Text>
            <Icon name='menu' type= 'Entypo' style={{color:'#fff'}}/>
          </View>

          <View style={{height:300,width:'100%'}}>
                <SliderBox 
                dotColor="red"
                images ={[
                    'https://cdn.frommfamily.com/media/1006/homepage-puppy-mobile.jpg',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvXPn_db7jPhprkOj7wdmUr8cStf5Kzh27wg&usqp=CAU',
                    'https://boston.cbslocal.com/wp-content/uploads/sites/3859903/2020/09/dog-food-nationwide-recall.jpg?w=1024']} />
          </View>

          <View style={{backgroundColor:'#4C4C49',height:140,marginTop:'-28%'}}>
              <View style={{flexDirection:'row',justifyContent:'center',marginTop:'5%'}}>
                <View style={{paddingVertical:10,marginRight:2,flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#fff',width:'50%'}}>
                  <Icon name='list' type= 'Feather' style={{color:'#E76F51',fontSize:20}}/>
                  <Text style={{fontSize:15,marginHorizontal:10,fontWeight:'bold'}}>Categories</Text>
                  <Icon name='triangle-down' type= 'Entypo' style={{color:'#000',fontSize:15,alignSelf:'center'}}/>
                </View>

                <View style={{paddingVertical:10,flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#fff',width:'40%'}}>
                  <Icon name='map-marker' type= 'FontAwesome' style={{color:'#E76F51',fontSize:20}}/>
                  <Text style={{fontSize:15,marginHorizontal:10,fontWeight:'bold'}}>Jordan</Text>
                  <Icon name='triangle-down' type= 'Entypo' style={{color:'#000',fontSize:15,alignSelf:'center'}}/>
                </View>
              </View>

                  <View style={{flexDirection:'row',height:40,paddingHorizontal:'5%',marginTop:2}}>
                  <Input placeholder="What are you looking for ?" style={{backgroundColor:'#fff',height:40, paddingLeft:10, width:'70%'}} />
      
                  <TouchableOpacity style={{width:'20%',justifyContent:'center',alignItems:'center',backgroundColor:'#E76F51'}}>
                  <Icon  name='search' type='Ionicons' style={{color:'#fff',fontSize:25}}/>
                  </TouchableOpacity>
                </View>
          </View>

              <View style={{backgroundColor:'#264653',marginTop:10,paddingVertical:10}}>
                <Text style={{fontSize:20,color:'#fff',textAlign:'center'}}>Displaying result for : Toy car</Text>
              </View>

            <View style={{margin:'5%',height:160,width:'90%'}}> 
              <Image 
                source={{ uri:'https://images.pexels.com/photos/97353/pexels-photo-97353.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} 
                style={{height:'100%',width:'100%'}}/>          
            </View >
            
        <View style={{alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:18,fontWeight:'bold',width:'60%'}}>Get in touch with the seller</Text>
          </View>
          <View style={{borderBottomColor:'#2A9D8F',borderBottomWidth:3,width:'60%',marginLeft:'20%',marginTop:5}}></View>
          <View style={{borderWidth:2,marginHorizontal:'20%',paddingVertical:'5%',alignItems:'center',marginVertical:10,borderRadius:10}}>
            <Text>Hi, I'm interested in "Toy Car".</Text>
            <Text>Is this still available?</Text>
          </View>
          <View style={{backgroundColor:'#264653',marginTop:10,paddingVertical:10}}>
                <Text style={{fontSize:20,color:'#fff',textAlign:'center'}}>Send Message</Text>
              </View>
              <Text style={{fontSize:30,fontWeight:'bold',textAlign:'center',marginVertical:20,color:'#264653'}}>Toy Car</Text>
              <Text style={{textAlign:'center',fontSize:16,color:'gray',marginBottom:20}}>Paleo mlkshk kogi squid gentrify{"\n"} aesthetic.Artisan la croix literally</Text>
          <Text style={{marginLeft:'10%',color:'gray',fontSize:16}}>Price : 50{'\uFF04'}</Text>
          <Text style={{marginLeft:'10%',color:'gray',fontSize:16}}>Delivery Fee : 10{'\uFF04'}</Text>
          <Text style={{marginLeft:'10%',color:'gray',fontSize:16}}>Estimate Time for delivery : 7-10 {"\n"}Days</Text>
          <Text style={{marginLeft:'10%',fontSize:17, fontWeight:'bold',color:'#264653',marginVertical:20}}>Total Payable amount : 60$</Text>
          <View style={{borderBottomColor:'#2A9D8F',borderBottomWidth:4,width:'40%',marginLeft:'28%'}}></View>
          <Text style={{textAlign:'center',fontSize:17,fontWeight:'bold',color:'#264653',marginVertical:15}}>Explore Other Products</Text>
          <View >
          <FlatList
                        data={text1}
                        renderItem={({item}) =>
                        <View style={{marginRight:10}}>
                        <Text style={{backgroundColor:'#2A9D8F',color:'#fff',padding:6,borderRadius:5}}>{item.text}</Text>
                        <Text style={{backgroundColor:'#2A9D8F',color:'#fff',padding:20,borderRadius:5,marginVertical:10}}>{item.text2}</Text>
                        </View>
                        }
                        horizontal = {true}
                        showsHorizontalScrollIndicator = { false }
                        /> 
                </View>
          
          </ScrollView>
</Container>
);

}
export default App;
