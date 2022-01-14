import React, {useLayoutEffect, useState} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import Configs from "../../configs";
import {infoScreenStyles } from "./styles";
import {useNavigation} from "@react-navigation/native";

const InfoScreen = ({route}: any) => {
    const params = route?.params || {};
    const [visible, setVisible] = useState(false)
    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            title:  `About ${params.name}`
        });
    }, [navigation]);
    return (
    <ScrollView>
        <View style={infoScreenStyles.container}>
            <Image source={{uri: `${Configs.domain}${params.IMAGEURL}`}} style={infoScreenStyles.image}/>
        </View>
        <View style={infoScreenStyles.wrapper}>
            <Text style={infoScreenStyles.text}>Actual coin price: {params.PRICE}</Text>
            <Text style={infoScreenStyles.text}>Quantity of block in blockchain: {params.BlockNumber}</Text>
            <Text style={infoScreenStyles.text}>Date of creation: {params.AssetLaunchDate}</Text>
        </View>
        <TouchableOpacity onPress={() => setVisible(prevState => !prevState)}>
        <Text style={infoScreenStyles.heading}>Give more info about token: </Text>
        </TouchableOpacity>
        {visible && <Text style={infoScreenStyles.description}>{params.Description}</Text>}
    </ScrollView>
  );
};

export default InfoScreen;
