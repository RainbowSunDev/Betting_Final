import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, Image } from 'react-native';
import HeaderComponent from '../../components/Header.com';
import GoDetailBtnBg from '../../../assets/img/goDetailBtnBg.png';
import AvatarImg from '../../../assets/img/avatar.jpg';

const PersonalSettingPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <HeaderComponent navigation={navigation} title={'个人设置'} />
            <View style={styles.list_container}>
                <View style={styles.avatar_view} onClick={() => { navigation.navigate('AvatarSetting') }}>
                    <View style={styles.avatar_info_view} >
                        <View>
                            <Text style={styles.list_text}>头像设置</Text>
                        </View>
                        <View>
                            <Image source={AvatarImg} style={styles.avatar_img} />
                        </View>
                    </View>
                    <View style={styles.go_detail_btn_view}>
                        <Image source={GoDetailBtnBg} style={styles.go_detail_btn} />
                    </View>
                </View>
                <View style={styles.nickname_view} onClick={() => { navigation.navigate('NicknameSetting') }}>
                    <View style={styles.avatar_info_view}>
                        <View>
                            <Text style={styles.list_text}>修改昵称</Text>
                        </View>
                        <View>
                            <Text style={styles.nickname_text}>Dong</Text>
                        </View>
                    </View>
                    <View style={styles.go_detail_btn_view}>
                        <Image source={GoDetailBtnBg} style={styles.go_detail_btn} />
                    </View>
                </View>
                <View style={styles.password_view} onClick={() => { navigation.navigate('PasswordSetting') }}>
                    <View style={styles.avatar_info_view}>
                        <View>
                            <Text style={styles.list_text}>重置密码</Text>
                        </View>
                    </View>
                    <View style={styles.go_detail_btn_view} >
                        <Image source={GoDetailBtnBg} style={styles.go_detail_btn} />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eeeeee'
    },
    list_container: {
        flex: 0.3,
        backgroundColor: 'white',
        paddingLeft: 20,
        paddingRight: 20
    },
    avatar_view: {
        flex: 0.4,
        width: '100%',
        borderBottomColor: '#e3e3e3',
        borderBottomWidth: 1,
        flexDirection: 'row'
    },
    avatar_info_view: {
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    avatar_img: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    nickname_view: {
        flex: 0.3,
        borderBottomColor: '#e3e3e3',
        borderBottomWidth: 1,
        flexDirection: 'row'
    },
    nickname_text: {
        color: 'aaa'
    },
    password_view: {
        flex: 0.3,
        borderBottomColor: '#e3e3e3',
        borderBottomWidth: 1,
        flexDirection: 'row'
    },
    go_detail_btn_view: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,

    },
    go_detail_btn: {
        resizeMode: 'contain',
        width: 13,
        height: 16
    },
    list_text: {
        color: '#525252',
        fontSize: 18
    }
})

export default PersonalSettingPage;