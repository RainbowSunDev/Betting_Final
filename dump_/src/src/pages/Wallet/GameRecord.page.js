import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderComponent from '../../components/Header.com';

const GameRecordPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <HeaderComponent navigation={navigation} title={'暂无记录'} />
                <View style={styles.data_body_view}>
                    <Text style={{ color: '#838383' }}>暂无记录</Text>
                </View>
            </View>

        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    data_body_view: {
        textAlign: 'center'
    }
})

export default GameRecordPage;