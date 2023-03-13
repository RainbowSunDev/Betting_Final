import React, { useState, useEffect } from 'react';
import { View, Button, TextInput, StyleSheet, Image } from 'react-native';
import EditCancelBtnBg from '../../../assets/img/editCancelBtnBg.png';
import EditHeader from '../../components/EditHeader.com';

const NicknameSettingPage = ({ navigation }) => {
    const [nickname, setNickname] = useState('');
    useEffect(() => {
        setNickname('Dong');
    }, [])
    return (
        <View style={styles.container}>
            <EditHeader navigation={navigation} title={'修改昵称'} />
            <View style={styles.edit_view}>
                <View style={styles.input_view}>
                    <TextInput style={[styles.edit_input, { outline: 'none' }]} onChange={(e) => { setNickname(e.target.value) }} value={nickname} />
                </View>
                <View style={styles.cancel_btn_view} onClick={(e) => { setNickname('') }} >
                    <Image source={EditCancelBtnBg} style={styles.cancel_btn} />
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    edit_view: {
        flex: 0.1,
        backgroundColor: 'white',
        flexDirection: 'row',
        width: '100%',
        height: 50
    },
    input_view: {
        backgroundColor: 'white',
        width: '90%',
        height: 50
    },
    edit_input: {
        width: '100%',
        height: '100%',
        fontSize: 18
    },
    cancel_btn_view: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center'
    },
    cancel_btn: {
        width: 15,
        height: '100%',
        resizeMode: 'contain'
    }

})

export default NicknameSettingPage;