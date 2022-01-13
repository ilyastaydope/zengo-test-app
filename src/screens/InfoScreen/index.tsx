import React from 'react';
import {Text, View, Image} from 'react-native';
import Configs from "../../configs";
import {infoScreenStyles} from "./styles";

const InfoScreen = ({route}: any) => {
    const params = route?.params || {};

    return (
    <View>
        <View style={infoScreenStyles.container}>
            <Image source={{uri: `${Configs.domain}${params.IMAGEURL}`}} style={infoScreenStyles.image}/>
        </View>
        <View style={infoScreenStyles.wrapper}>
            <Text style={infoScreenStyles.text}>Actual coin price: {params.PRICE}</Text>
            <Text style={infoScreenStyles.text}>Quantity of block in blockchain: {params.BlockNumber}</Text>
            <Text style={infoScreenStyles.text}>Date of creation: {params.AssetLaunchDate}</Text>
        </View>
        <Text style={infoScreenStyles.heading}>Short info about token: </Text>
        <Text>{params.Description}</Text>
    </View>
  );
};

export default InfoScreen;
