import React from 'react';
import {Text, View, TouchableOpacity} from "react-native";
import {headingStyles} from "./styles";
import {IHeading} from "../../types/IHeading";

const Heading: React.FC<IHeading> = ({handleClick}) => {

    return (
        <View style={headingStyles.wrapper}>
            <Text>Pin coin</Text>
            <Text>Coin name</Text>
            <TouchableOpacity onPress={handleClick}>
                <Text>Price (USD)</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Heading;
