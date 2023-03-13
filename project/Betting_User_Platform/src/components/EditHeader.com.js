import React from "react";
import { LinearGradient } from 'expo-linear-gradient'
import { View, Image, Text } from "react-native";
import backBtnBg from '../../assets/img/backBtnBg.png';

const EditHeader = (props) => {
    const navigation = props.navigation;
    const title = props.title;
    return (
        <View style={{ width: '100%', height: 50 }}>
            <LinearGradient
                colors={['#386f96', '#6292b0']}
                style={{ width: '100%', height: '100%' }}>
                <View style={{
                    width: '100%', height: '100%',
                    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
                }}>
                    <View style={{ alignItems: 'center', marginLeft: 10 }} onClick={() => { navigation.goBack() }}>
                        <Text style={{ color: 'white', fontSize: 16 }}>取消</Text>
                    </View>
                    <View>
                        <Text style={{ color: 'white', fontSize: 18 }}>{title}</Text>
                    </View>
                    <View style={{ alignItems: 'center', marginRight: 10 }}>
                        <Text style={{ color: 'white', fontSize: 16 }}>完成</Text>
                    </View>
                </View>
            </LinearGradient>
        </View>
    )
}

export default EditHeader;