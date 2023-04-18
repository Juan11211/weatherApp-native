import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView, Text, StyleSheet, ImageBackground, View } from 'react-native'
import { Feather } from '@expo/vector-icons';
import IconText from '../components/IconText';

const City = () => { 
    const { container, cityName, cityText, populationText, populationWrapper, riseSetText, riseSetWrapper, rowLayout, stateName } = styles

    return (
        <SafeAreaView style={container}>
        <ImageBackground source={require('../../assets/cityBackground.jpg')}
        style={styles.imageLayout}>
            <Text style={[cityName, cityText]}>NY</Text>
            <Text style={[stateName, cityText]}>New York</Text>
                <View style={[populationWrapper, rowLayout]}>
                    <IconText 
                        iconName={'user'} iconColor={'red'} 
                        bodyText={'8000'} bodyTextStyles={populationText} />
                </View>
                <View style={[riseSetWrapper, rowLayout]}>
                    <IconText 
                        iconName={'sunrise'} iconColor={'white'}
                        bodyText={'6:55am'} bodyTextStyles={riseSetText} />
                    <IconText 
                        iconName={'sunset'} iconColor={'white'}
                        bodyText={'8:00pm'} bodyTextStyles={riseSetText} />
                </View>
        </ImageBackground>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'black',
        color: 'white'
    },
    imageLayout: { 
        flex: 1,
        
    },
    cityName: { 
        fontSize: 40,
    },
    stateName: {
        fontSize: 30,
    },
    cityText: { 
        justifyContent: 'center',
        alignSelf: 'center', 
        fontWeight: 'bold', 
        color: 'white'
    },
    populationWrapper: {
    
        justifyContent: 'center',
        marginTop: 30
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'white',
      
    },
    riseSetWrapper: {
      
        justifyContent: 'space-around',
        marginTop: 30
    },
    riseSetText: {
        fontSize: 20,
        color: 'white',
       
    },
    rowLayout: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default City;