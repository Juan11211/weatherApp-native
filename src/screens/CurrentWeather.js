import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';
import {weatherType} from '../utilities/weatherType'



const currentWeather = ({weatherData}) => {
  
  const { main: { temp, feels_like, temp_max, temp_min}, weather} = weatherData

  const weatherCondition = weather[0].main

  return(
    <SafeAreaView style={[styles.wrapper, { backgroundColor: weatherType[weatherCondition].backgroundColor}] }>
      <View style={styles.container}>
      <Feather name={weatherType[weatherCondition].icon} size={100} color='white'/>
        <Text style={styles.temp}>{temp}</Text>
        <Text style={styles.feels}>{`Real feel ${feels_like}`}</Text>
        <RowText messageOne={`High of ${temp_max}`} messageTwo={`Low of ${temp_min}`} containerStyles={styles.hiloWrapper} 
          messageOneStyles={styles.hilo} messageTwoStyles={styles.hilo} />
        <RowText messageOne={'Its sunny'}    messageTwo={weatherType[weatherCondition]?.message} />  
        containerStyles={styles.bodyWrapper} messageOneStyles={styles.desc} messageTwoStyles={styles.desc}/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrapper: {
    flex: 1,
    backgroundColor: 'lightblue'
  }, 
  temp: {
    color: 'white',
    fontSize: 48
  },
  feels: {
    color: 'white',
    fontSize: 20
  },
  hilo: {
    color: 'white',
    fontSize: 17
  },
  hiloWrapper: {
    flexDirection: 'row',

  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  desc: {
    fontSize: 48
  },
  message: {
    fontSize: 28
  }
})

export default currentWeather
;
