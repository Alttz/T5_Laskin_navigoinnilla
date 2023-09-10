import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginBottom: 250,
        padding: 75,
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        margin: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
        marginHorizontal: 60,
    },
    button: {
        backgroundColor: 'rgba(33,150,243,255)',
        padding: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        marginHorizontal: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
    resultText: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 18,
    },
    flatListItem: {
        textAlign: 'center',
        fontSize: 18,
    },
    historyButtonView: {
        width: 80, 
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5, 
    },
});

export default styles;
