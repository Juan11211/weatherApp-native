import React from 'react'
import {StyleSheet, ActivityIndicator , View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import { useGetWeather } from './src/hooks/useGetWeather'

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const App = () => {
  const [loading, error, weather] = useGetWeather();


if(weather && weather.list){
  return (
    <NavigationContainer>
      <Tabs weather={weather}/>
    
    </NavigationContainer>
  )
}

  return (
  <View style={styles.container}>
    <ActivityIndicator size={'large'} color={'grey'} />
   </View>
   )

}

const styles = StyleSheet.create({
  container: { 
    justifyContent: 'center',
    flex: 1
  }
})

export default App;