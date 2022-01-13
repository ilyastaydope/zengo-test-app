import {StyleSheet} from "react-native";

export const tickerStyles =  StyleSheet.create({
    container: {
        flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderColor: '#0390fc', borderRadius: 6, borderWidth: 1, marginBottom: 10
    },
    wrapper : {flexDirection: 'row', alignItems: 'center'},
    imageContainer: {
    width: 50, height: 50
    },
    buttonWrapper : {justifyContent: 'center', borderColor: '#0390fc', borderRadius: 6, borderWidth: 1, paddingHorizontal: 2, paddingVertical: 1, backgroundColor:'#0390fc'}
})
export const stylesProps = (isHigher: boolean) => StyleSheet.create({
    ticketContainer: {alignSelf: 'center', borderRadius: 6, padding: 8, backgroundColor: isHigher ? 'green': 'red'},
});
