import React, { useEffect, useState} from 'react';
import {View, FlatList, ActivityIndicator, Alert} from 'react-native';
import Ticker from "../../components/ticker";
import Heading from "../../components/heading";
import {getSymbols, getAllCoins} from "../../api";
import {mainScreenStyles} from "./styles";
import {parseDigits} from "../../utils/parceDigits";
import {IBlockChainData} from "../../types/IData";

const MainScreen: React.FC = ({ route }: any) => {
  const [data, setData] = useState<IBlockChainData[]>([]);
  const [order, setOrder] = useState<'asc' | 'desc'>('asc')

  const initialize = async () => {
    try {
      const {symbolsList, converters} = route.params || {
        converters: ['USD'],
      };
      const {Data: coins} = await getAllCoins();
      const symbolsFrom = symbolsList || Object.keys(coins).slice(0, 10);

      const {DISPLAY}: any = await getSymbols(symbolsFrom, converters);

      const symbols = Object.keys(DISPLAY).reduce((arr: IBlockChainData[], name: string) => {
        const symbol = {...DISPLAY[name].USD, ...coins[name], coinName: coins[name].CoinName, name};
        arr.push(symbol);
        return arr;
      }, []);

      setData(symbols);
    } catch (e) {
      console.log(e)
      Alert.alert(`Can't fetch symbols`);
    }
  };

  useEffect(() => {
    initialize();
  }, []);

  const moveToTop = (idx: number) => () => {
    const currItem = data.splice(idx, 1)
    setData([...currItem, ...data])
  }

  const sort = () => {
    return () => {
      setData((prev: IBlockChainData[]) =>  {
        if(order === 'asc'){
          setOrder('desc')
          return[...prev.sort((a: any, b: any) => parseDigits(a.PRICE) - parseDigits(b.PRICE))];
        }
        else {
          setOrder('asc')
          return[...prev.sort((a: any, b: any) => parseDigits(b.PRICE) - parseDigits(a.PRICE))]
      }})
    }

  }

  const renderItem = ({item, index}: any) => {
    if (!item.PRICE) {
      return null;
    }
    return <Ticker {...item} moveToTop={moveToTop(index)} />
  }

  return (
    <View style={mainScreenStyles.container}>
      <Heading handleClick={sort()}/>
      <FlatList
        renderItem={renderItem}
        data={data}
        keyExtractor={item => item.FROMSYMBOL}
        ListEmptyComponent={() => <View><ActivityIndicator color={'black'} size={128} /></View>}
      />
    </View>
  );
};

export default MainScreen;
