import React, { Component } from 'react';
import { AppRegistry, Image, View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView , Button} from 'react-native';

import Banana from './app/pages/banana';
import BlinkApp from './app/pages/BlinkApp'
import LotsOfStyles from './app/pages/LotsOfStyles'
import FixedDimensionsBasic from './app/pages/FixedDimensionsBasic'
import FlexDirectionBasics from './app/pages/FlexDirectionBasics'
import PizzaTranslator from './app/pages/PizzaTranslator'
import IScrolledDownAndWhatHappenedNextShockedMe from './app/pages/IScrolledDownAndWhatHappenedNextShockedMe'
import FlatListBasics from './app/pages/FlatListBasics'
import FetchExample from './app/pages/FetchExample'

export default class Bananas extends Component {
  render() {
    
    return (
         
      <ScrollView>

      <Banana />
      <BlinkApp/>
      <LotsOfStyles/>
      <FixedDimensionsBasic/>
      <FlexDirectionBasics/>
      <PizzaTranslator />
      <IScrolledDownAndWhatHappenedNextShockedMe />
      <FlatListBasics />
      <FetchExample />

     </ScrollView>

    <Button
      onPress={() => {
      Alert.alert('Why you tapped the button?');
}}
    title="Do not Press Me"
    />
     

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  Text: {
    fontSize: 18,
    color: 'green',
  }
 
});
