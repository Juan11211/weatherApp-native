import React from 'react'
import {SafeAreaView, StyleSheet, Text, FlatList, StatusBar,ImageBackground} from 'react-native'
import ListItem from '../components/ListItem'

const weatherType = [
    { "dt_txt": "2022-08-30 16:00:00",
    "main": {
        "temp": 296.31,
        "feels_like": 296.07,
        "temp_min": 296.2,
        "temp_max": 296.31,
      },
      "weather": [
        {
          "main": "Rain",
          "description": "light rain",
        }
      ]
},

    { "dt_txt": "2022-08-30 16:00:00",
    "main": {
        "temp": 296.31,
        "feels_like": 296.07,
        "temp_min": 296.2,
        "temp_max": 296.31,
      },
      "weather": [
        {
          "main": "Rain",
          "description": "light rain",
        }
      ]},

    { "dt_txt": "2022-08-30 16:00:00",
    "main": {
        "temp": 296.31,
        "temp_min": 296.2,
        "temp_max": 296.31,
      },
      "weather": [
        {
          "main": "Rain",
          "description": "light rain",
        }
      ]}
]

const UpComingWeather = () => {
  const renderItem = ({item}) => { // what to pass into the renderItem in the flatList. 
    return <ListItem condition={item.weather[0].main} dt_txt={item.dt_txt} temp_min={item.main.temp_min} temp_max={item.main.temp_max} description={item.weather[0].description} />  
  }

          const {image, container } = styles // descru styles
    return ( // whats being render on screen
        <SafeAreaView style={container}>
           <ImageBackground source={require('../../assets/upcomingrain.jpg')} style={image}>
              <Text>Upcoming forecast</Text>
                <FlatList 
                    keyExtractor={(item) => item.dt_txt}
                    data={weatherType} 
                    renderItem={renderItem} />
           </ImageBackground>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0, // constant from statsbar. take to acct both platforms - andriod - ios
        backgroundColor: 'black'
    },
    image: {
      flex: 1
    }
});


export default UpComingWeather; 


/* props in react native 
  props make components customizable, make it more reusable 
  once its created, can't be changed. its immutable. 

      */