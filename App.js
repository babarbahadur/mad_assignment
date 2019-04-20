import React, { Component } from 'react';
import { Text, View, Button, Image } from 'react-native';

//Navigation Imports
import { createStackNavigator, createAppContainer,  } from 'react-navigation';


//Home Screen View Settings
class Introduction   extends Component {
  static navigationOptions = {
    title: 'Introduction'
  }
  render() {

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      
      <Image
          style={{width: 200, height: 200}}
          source={{uri: 'https://pbs.twimg.com/profile_images/1046406628755611648/TRyMT7km.jpg'}}
        />

        <Text>Obtain a challenging leadership position applying creative problem solving and lean management skills with a growing company to achieve optimum utilization of its resources and maximum profits</Text>
      
        <Button
          title="Next"
          onPress={() => this.props.navigation.navigate('Education', {
            itemId: 12,
            otherMsg: "Sent to Education"
          })}
        />
      </View>

      

    );
  }
}


//Education Screen View Settings
class EducationScreen extends Component {
  static navigationOptions = {
    title: 'Education Screen'
  }
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherMsg = navigation.getParam('otherMsg', 'This is the default Msg');

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Matric: VM Public School</Text>
        <Text>FSC: Sindh Muslim Goverment Science College</Text>
        <Text>Graduation: BS-SE (Mohammad Ali Jinnah University)</Text>
        
        

        <Button
          title="Next"
          onPress={() => this.props.navigation.navigate('Experience')}
        />
        
        <Button
          title="Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />

        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />

      </View>
    );
  }
}





//Experience Screen View Settings
class ExperienceScreen extends Component {
  static navigationOptions = {
    title: 'Experience Screen'
  }
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherMsg = navigation.getParam('otherMsg', 'This is the default Msg');

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Fresh Graduate</Text>
        
        <Button
          title="Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />

        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />

      </View>
    );
  }
}





//Creation of the Stack Navigator
const AppNavigator = createStackNavigator({
  Home: Introduction,
  Education: EducationScreen,
  Experience: ExperienceScreen
},
  {
    initialRouteName: "Home"
  });

//Exporting while creating the App Container
// export default createAppContainer(AppNavigator);
const AppContainer = createAppContainer(AppNavigator);
export default class App extends Component {
  render() {
    return <AppContainer />
  }
}

