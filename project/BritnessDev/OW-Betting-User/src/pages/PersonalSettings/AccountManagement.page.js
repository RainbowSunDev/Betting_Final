import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import HeaderComponent from '../../components/Header.com';
import GoDetailBtnBg from '../../../assets/img/goDetailBtnBg.png';

const AccountManagementPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <HeaderComponent navigation={navigation} title={'账号管理'} />
            <View>
                <View style={styles.row_view} onClick={() => { navigation.navigate('PasswordSetting') }}>
                    <View>
                        <Text style={styles.list_text}>重置密码</Text>
                    </View>
                    <View style={styles.go_detail_btn_view}>
                        <Image source={GoDetailBtnBg} style={styles.switch_btn} />
                    </View>
                </View>
                <Text style={{ margin: 10, fontSize: 14, color: '#828282' }}>请不要设置与常用软件、网站、论坛等相同或相似的密码,并做定期修改</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eeeeee'
    },
    row_view: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 9,
        height: 50,
        paddingHorizontal: 10
    },
    list_text: {
        color: '#1a1a1a',
        fontSize: 17
    },
    go_detail_btn_view: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    switch_btn: {
        resizeMode: 'contain',
        width: 20,
        height: 15
    },
})

export default AccountManagementPage;