import React from 'react';
import {Button, Text, View} from 'react-native';
export default class App extends React.Component {
   /*
   Initialize state object
   with variable 'number'
   set to 0 and variable name
   with value of empty string
   */
   state = {number: 0};
   render() {
       return (
           <View style={{
               flexDirection: 'row',
               justifyContent: 'space-between',
               alignItems: 'center',
               flex: 1,
               padding: 20
           }}>
               <Button title='Decrement'
                       color='#e57373'
                       onPress={() => this.decrement()}/>
               <Text>
                   Value = {this.state.number}
               </Text>
               <Button title='Increment'
                       color='#64B5F6'
                       onPress={() => this.increment()}/>
           </View>
       );
   }
   //Declaration of decrement function
   decrement() {
       this.setState({number: this.state.number - 1});
   }
   increment() {
       this.setState({number: this.state.number + 1});
   }
}