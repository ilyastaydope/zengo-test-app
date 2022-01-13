import {StyleSheet} from "react-native";
export const infoScreenStyles = StyleSheet.create({
    container: {
        flexDirection: 'row', alignItems: 'center', marginBottom: 10, justifyContent: 'center'
    },
    image: {
        width: 50, height: 50, borderWidth: 1, borderColor: '#0390fc', borderRadius: 6
    },
    wrapper: {
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#d3d7db',
        borderRadius: 10,
        borderColor: '#0390fc',
        borderWidth: 1
    },
    text: {
        color: '#0390fc',
        fontSize: 20,
        padding: 5
    },
    heading: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 5
    }
})
