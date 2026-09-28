import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    button: {
        marginBottom: 20,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#009de0'
    },
    buttonPressed: {
        backgroundColor: '#ff9800' // cor enquanto o botão está pressionado
    },
    text: {
        fontSize: 16,
        color: '#fff'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12
    },
    label: {
        color: '#fff',
        fontSize: 16
    },
    lengthInput: {
        backgroundColor: '#fff',
        width: 70,
        textAlign: 'center',
        fontSize: 18,
        paddingVertical: 4,
        borderRadius: 4
    }
})