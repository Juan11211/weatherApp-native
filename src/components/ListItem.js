import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Feather } from '@expo/vector-icons';

const ListItem = (props) => {
  const { dt_txt, temp_min, temp_max, main, description} = props
   return( 
     
       <View style={styles.item}>
           <Feather name='sun' size={30} color='black' />
           <Text style={styles.date}>{dt_txt}</Text>
           <Text style={styles.temp}>{temp_min}</Text>
           <Text style={styles.temp}>{temp_max}</Text>
           <Text style={styles.temp}>{main}</Text>
           <Text>{description}</Text>
       </View>
   )
}


const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16, 
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderWidth: 5,
        backgroundColor: 'lightblue',
        alignItems: 'center'
      },
      temp: {
        color: 'white',
        fontSize: 20
  
      },
      date: {
        color: 'white',
        fontSize: 15
      },
})

export default ListItem;