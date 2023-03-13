import React from "react";
import { LinearGradient } from 'expo-linear-gradient'
import { View, Image, Text } from "react-native";
import backBtnBg from '../../assets/img/backBtnBg.png';

const HeaderComponent = (props) => {
    const navigation = props.navigation;
    const title = props.title;
    return (
        <View style={{ width: '100%', height: 50 }}>
            <LinearGradient
                colors={['#386f96', '#6292b0']}
                style={{ width: '100%', height: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <View>
                    <Text style={{ color: 'white', fontSize: 18 }}>{title}</Text>
                </View>
            </LinearGradient>
            <View style={{ position: 'absolute', top: 0, left: 0, height: '100%', justifyContent: 'center', alignItems: 'center' }}
                onClick={() => navigation.goBack()}>
                <Image source={backBtnBg} style={{ width: 13, height: 16, resizeMode: 'contain', marginLeft: 10 }} />
            </View>
        </View>
    )
}

export default HeaderComponent;