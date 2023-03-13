import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, ImageBackground } from 'react-native';
import HeaderComponent from '../../components/Header.com';
import AvatarImg from '../../../assets/img/avatar.jpg';

const AvatarSettingPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <HeaderComponent navigation={navigation} title={'个人头像'} />
            <View style={styles.comment_text_view}>
                <Text style={styles.comment_text}>点击此图片打开手机相册</Text>
            </View>
            <View style={styles.avatar_view}>
                <ImageBackground source={AvatarImg} style={{ width: '100%', height: '100%' }} resizeMode="stretch" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    comment_text_view: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    comment_text: {
        color: '#888888',
        fontSize: 16
    },
    avatar_view: {
        flex: 0.6,
        width: '100%',
        height: '100%'
    }
})

export default AvatarSettingPage;