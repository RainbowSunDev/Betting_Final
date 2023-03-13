import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-web';
import HeaderComponent from '../../components/Header.com';
import DownArrow from '../Wallet/img/downArrow.png';
import RacingRule from './img/racingRule.png';

const IntroductionPage = ({ navigation }) => {
    const dimensions = Dimensions.get('window');
    const [ruleImgSize, setRuleImgSize] = useState({ width: 0, height: 0 });
    useEffect(() => {
        Image.getSize(RacingRule, (width, height) => { setRuleImgSize({ width: width, height, height }) });
    }, [])

    const cateogry_name = ['幸运飞艇', '澳洲幸运10', '极速赛车']
    const [selectedCategory, setSelectedCategory] = useState(1);
    const [screenFlag, setScreenFlag] = useState(false);
    const selectedBack = { backgroundColor: '#6292ae', color: 'white' };
    const unSelectedBack = { backgroundColor: '#ededed', color: '#838383' };
    return (
        <View style={styles.container}>
            <HeaderComponent navigation={navigation} title={'房间介绍'} />
            <View style={styles.room_intro_view}>
                <Text style={styles.intro_header_txt}>房间介绍:</Text>
                <View style={styles.intro_content_view}></View>
            </View>
            <View>
                <View style={styles.drop_down_view} onClick={() => setScreenFlag(!screenFlag)}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16 }}>{cateogry_name[selectedCategory - 1]}</Text>
                        <Image source={DownArrow} style={{ width: 10, height: 10, resizeMode: 'contain', marginLeft: 20 }} />
                    </View>
                    <View style={{ position: 'absolute', right: 10, color: '#878787', fontSize: 12 }}><Text>游戏规则</Text></View>
                </View>
                {
                    screenFlag
                        ?
                        <View style={styles.category_view}>
                            <View style={[styles.category, selectedCategory === 1 ? selectedBack : unSelectedBack]}
                                onClick={() => { setSelectedCategory(1); setScreenFlag(!screenFlag) }}><Text style={selectedCategory === 1 ? { color: 'white' } : { color: '#838383' }}>幸运飞艇</Text></View>
                            <View style={[styles.category, selectedCategory === 2 ? selectedBack : unSelectedBack]}
                                onClick={() => { setSelectedCategory(2); setScreenFlag(!screenFlag) }}><Text style={selectedCategory === 2 ? { color: 'white' } : { color: '#838383' }}>澳洲幸运10</Text></View>
                            <View style={[styles.category, selectedCategory === 3 ? selectedBack : unSelectedBack]}
                                onClick={() => { setSelectedCategory(3); setScreenFlag(!screenFlag) }}><Text style={selectedCategory === 3 ? { color: 'white' } : { color: '#838383' }}>极速赛车</Text></View>
                        </View>
                        :
                        <View></View>
                }
                <ScrollView vertical showsVerticalScrollIndicator={false} style={{ height: screenFlag ? dimensions.height - 210 : dimensions.height - 170 }}>
                    <Image source={RacingRule} style={{ width: dimensions.width - 20, height: ruleImgSize.height * dimensions.width / ruleImgSize.width, marginHorizontal: 10 }} />
                </ScrollView>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#efefef'
    },
    room_intro_view: {
        marginTop: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        backgroundColor: '#f5f5f5'
    },
    intro_header_txt: {
        fontSize: 16,
        color: '#2b2b2b',
        marginTop: 5,
        marginLeft: 10
    },
    intro_content_view: {
        height: 20
    },
    drop_down_view: {
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        borderTopLeftRadius: 10,
        borderTopEndRadius: 10,
        marginTop: 10,
        marginHorizontal: 10
    },
    category_view: {
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        paddingHorizontal: 15,
        marginHorizontal: 10,
        marginBottomColor: '#ededed',
        marginBottomWidth: 1
    },
    category: {
        width: 'fit-content',
        paddingHorizontal: 20,
        height: 25,
        borderRadius: 13,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 12
    },
    racing_rule_img: {
        resizeMode: 'contain'
    }
})

export default IntroductionPage;