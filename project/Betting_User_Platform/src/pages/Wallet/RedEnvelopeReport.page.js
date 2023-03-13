import React from "react";
import { LinearGradient } from 'expo-linear-gradient'
import { View, Image, Text } from "react-native";
import backBtnBg from '../../../assets/img/backBtnBg.png';

const RedEnvelopeReportPage = (props) => {
    const navigation = props.navigation;
    return (
        <View style={{ flex: 1 }}>
            <View style={{ width: '100%', height: 50 }}>
                <LinearGradient
                    colors={['#ff6467', '#ff2152']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{ width: '100%', height: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View>
                        <Text style={{ color: 'white', fontSize: 18 }}>红包报表</Text>
                    </View>
                </LinearGradient>
                <View style={{ position: 'absolute', top: 0, left: 0, height: '100%', justifyContent: 'center', alignItems: 'center' }}
                    onClick={() => navigation.goBack()}>
                    <Image source={backBtnBg} style={{ width: 13, height: 16, resizeMode: 'contain', marginLeft: 10 }} />
                </View>
            </View>
            <View style={{ width: '100%', flex: 0.3 }}>
                <LinearGradient
                    colors={['#ff6467', '#ff2152']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{ width: '100%', height: '100%' }}>
                </LinearGradient>
                <View style={{
                    width: '100%', backgroundColor: 'white',
                    height: '80%', position: 'absolute', bottom: 0,
                    borderTopEndRadius: 10, borderTopStartRadius: 10,
                    justifyContent: 'flex-end', alignItems: 'center'
                }}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 20 }}>Dong的红包记录</Text>
                        <Text style={{ fontSize: 50, marginBottom: 10 }}>0</Text>
                    </View>
                </View>
            </View>
            <Text style={{ color: '#838383', marginTop: 10, marginLeft: 10, fontSize: 15 }}>共领取0个红包</Text>
            <View style={{ textAlign: 'center', marginTop: 10 }}>
                <Text style={{ color: '#a8a8a8' }}>暂无记录</Text>
            </View>
        </View>
    )
}

export default RedEnvelopeReportPage;