import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';
import {weatherType} from '../utilities/weatherType'
const currentWeather = () => {
  
  return(
    <SafeAreaView style={styles.wrapper }>
      <View style={styles.container}>
        <Text>Current Weather</Text>
      <Feather name='sun' size={100} color='white'/>
        <Text style={styles.temp}>75</Text>
        <Text style={styles.feels}>Real Feel 81</Text>
        <RowText messageOne={'High 81'} messageTwo={'Low 75'} containerStyles={styles.hiloWrapper} 
          messageOneStyles={styles.hilo} messageTwoStyles={styles.hilo} /> 
      </View>
      <View>
        <RowText messageOne={'Its sunny'} messageTwo={'Buns Out'}  
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
