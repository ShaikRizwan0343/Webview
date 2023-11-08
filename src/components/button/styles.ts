import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    button: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 4,
        backgroundColor: 'blue'
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign:'center'
    },
    buttonContainer: {
        alignItems: 'flex-start',
        flex: 1,
        padding: 15
    }
});

export default styles;
