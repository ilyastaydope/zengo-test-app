import React, {useContext, useEffect, useState} from 'react';
import {Text, TouchableOpacity, View, Image, ActivityIndicator} from "react-native";
import SocketProviderContext from "../../providers/socketProvider/context";
import {stylesProps, tickerStyles} from "./styles";
import {useNavigation} from "@react-navigation/native";
import Configs from '../../configs';
import {parseDigits} from "../../utils/parceDigits";
import {IBlockChainData} from "../../types/IData";

const Ticker: React.FC<any> = (props) => {
    const {socket} = useContext(SocketProviderContext);
    const [data, setData] = useState(props);
    const navigation = useNavigation();
    const goToTickerScreen = () => {
        navigation.navigate('info' as any, data);
    }

    const onMessage = (message: { data: string }) => {
        try {
            const searchData = `"FROMSYMBOL":"${props.name}"`;
            if (!message.data.includes(searchData)) {
                return;
            }
            const ticker = JSON.parse(message.data);
            if (ticker.PRICE) {
                setData({
                    ...data,
                    PRICE: ticker.PRICE,
                    isHigher: parseDigits(data.PRICE) < parseDigits(ticker.PRICE),
                });
            }
        } catch(e) {
            console.log(e)
        }
    }

    useEffect(() => {
        socket.addEventListener('message', onMessage);
        return () => {
            socket.removeEventListener('message', onMessage);
        };
    }, [socket]);



    return (
        <TouchableOpacity style={tickerStyles.container} onPress={goToTickerScreen}>
           <TouchableOpacity style={tickerStyles.buttonWrapper} onPress={props.moveToTop}>
               <Text>
                   Pin Item
               </Text>
           </TouchableOpacity>
            <View style={tickerStyles.wrapper}>
                <Image source={{uri: `${Configs.domain}${props.IMAGEURL}`}} style={tickerStyles.imageContainer} />
                <Text>{data.name}</Text>
            </View>
            <View style={stylesProps(data.isHigher).ticketContainer}>
                {data.PRICE ? <Text>{data.PRICE}</Text> : <ActivityIndicator color={'black'}/>}
            </View>
        </TouchableOpacity>
    );
};

export default Ticker;
