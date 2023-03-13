import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, Image } from 'react-native';
import { Slider } from 'react-native-elements';

import HeaderComponent from '../../components/Header.com';
import GoDetailBtnBg from '../../../assets/img/goDetailBtnBg.png';
import AvatarImg from '../../../assets/img/avatar.jpg';
import SwitchOn from './img/switchOn.png';
import SwitchOff from './img/switchOff.png';
import VoiceLess from './img/voiceLess.png';
import VoiceUp from './img/voiceUp.png';

const SettingPage = ({ navigation }) => {
    const [status1, setStatus1] = useState(true);
    const [status2, setStatus2] = useState(true);

    return (
        <View style={styles.container}>
            <HeaderComponent navigation={navigation} title={'个人中心'} />
            <View style={styles.list_container}>
                <View style={styles.user_info_view} onClick={() => { navigation.navigate('PersonalSetting') }}>
                    <View style={styles.info_view}>
                        <View>
                            <Image source={AvatarImg} style={styles.avatar_img} />
                        </View>
                        <View style={{ marginLeft: 10, justifyContent: 'space-between', height: '100%' }}>
                            <Text style={{ color: 'black', fontSize: 16 }}>Dong</Text>
                            <Text style={{ color: '#525252', fontSize: 14 }}>账号:3709632838</Text>
                        </View>
                    </View>
                    <View style={styles.go_detail_btn_view}>
                        <Image source={GoDetailBtnBg} style={styles.go_detail_btn} />
                    </View>
                </View>
                <View style={styles.user_setting}>
                    <View style={styles.row_view} onClick={() => { navigation.navigate('AccountManagement') }}>
                        <View>
                            <Text style={styles.list_text}>账号管理</Text>
                        </View>
                        <View style={styles.go_detail_btn_view}>
                            <Image source={GoDetailBtnBg} style={styles.go_detail_btn} />
                        </View>
                    </View>
                    <View style={styles.row_view}>
                        <View>
                            <Text style={styles.list_text}>背景音乐</Text>
                        </View>
                        <View style={styles.go_detail_btn_view}>
                            <Image source={status1 ? SwitchOn : SwitchOff} style={styles.switch_btn} onClick={() => setStatus1(!status1)} />
                        </View>
                    </View>
                    <View style={[styles.row_view, { borderWidth: 0, paddingVertical: 5 }]}>
                        <Image source={VoiceLess} style={styles.voice_less_img} />
                        <View style={styles.slider_view}>
                            <Slider thumbTintColor='white' trackStyle={sliderStyle.track} minimumTrackTintColor='#64a7f0'
                                thumbStyle={sliderStyle.thumb} value={0.2} />
                        </View>
                        <Image source={VoiceUp} style={styles.voice_up_img} />
                    </View>
                    <View style={styles.row_view}>
                        <View>
                            <Text style={styles.list_text}>游戏音效</Text>
                        </View>
                        <View style={styles.go_detail_btn_view}>
                            <Image source={status2 ? SwitchOn : SwitchOff} style={styles.switch_btn} onClick={() => setStatus2(!status2)} />
                        </View>
                    </View>
                    <View style={[styles.row_view, , { borderWidth: 0, paddingVertical: 5 }]}>
                        <Image source={VoiceLess} style={styles.voice_less_img} />
                        <View style={styles.slider_view}>
                            <Slider thumbTintColor='white' trackStyle={sliderStyle.track} minimumTrackTintColor='#64a7f0'
                                thumbStyle={sliderStyle.thumb} value={0.4} />
                        </View>
                        <Image source={VoiceUp} style={styles.voice_up_img} />
                    </View>
                    <View style={[styles.row_view, { borderWidth: 0 }]}>
                        <View>
                            <Text style={styles.list_text}>游戏音效</Text>
                        </View>
                        <View style={styles.go_detail_btn_view}>
                            <Text style={{ fontSize: 12 }}>0.5.1</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.log_out_btn}>
                <Text style={{ fontSize: 16 }}>退出登录</Text>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eeeeee'
    },
    list_container: {
    },
    user_info_view: {
        width: '100%',
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'white'
    },
    info_view: {
        width: '95%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10
    },
    avatar_img: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    user_setting: {
        marginTop: 20,
        paddingHorizontal: 20,
        backgroundColor: 'white'
    },
    row_view: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#e4e4e4',
        borderBottomWidth: 1,
        paddingVertical: 9
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
    switch_btn: {
        resizeMode: 'contain',
        width: 60,
        height: 28
    },
    voice_less_img: {
        width: 15,
        height: 20,
        resizeMode: 'stretch'
    },
    voice_up_img: {
        width: 30,
        height: 25,
        resizeMode: 'stretch'
    },
    list_text: {
        color: '#1a1a1a',
        fontSize: 17
    },
    slider_view: {
        width: 'calc(100% - 80px)',
    },
    log_out_btn: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '-webkit-fill-available',
        height: 40,
        backgroundColor: 'white'
    }
});


var sliderStyle = StyleSheet.create({
    track: {
        height: 2,
        borderRadius: 1,
        width: '100%'
    },
    thumb: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        shadowOpacity: 0.35,
    }
});

export default SettingPage;