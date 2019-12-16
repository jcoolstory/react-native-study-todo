import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';

const Heading = () => (
    <View style = { styles.header }>
    <Text style = { styles.headerText } >
        todos1
    </Text>
    </View>
)

const styles = StyleSheet.create({
    header : {
        marginTop:80
    },
    headerText: {
        textAlign:'center',
        fontSize:72,
        color : 'rgba(175,47,47,0.25)',
        fontWeight:'100'
    }
})

export default Heading