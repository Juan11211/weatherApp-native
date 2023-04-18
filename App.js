import React, {useState, useEffect} from 'react'
import {StyleSheet, ActivityIndicator , View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import * as Location from 'expo-location'
import { TEST_KEY } from '@env'

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const App = () => {
  const [loading, setLoading] = useState(true); // they can see the indicator
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  if(loading){
    return (
      <View style={styles.container}>
        <ActivityIndicator size='large' color={'grey'} />
      </View>
    )
  }
  console.log(TEST_KEY)
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionAsync();
      if (status !== 'granted') {
        setError('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
  

  return (
    <NavigationContainer>
      <Tabs />
    
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: { 
    justifyContent: 'center',
    flex: 1
  }
})

export default App;