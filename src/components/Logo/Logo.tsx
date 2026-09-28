import { View, Text, Image } from 'react-native';
import imgLogo from '../../../assets/logo-app.png';
import styles from './LogoStyles';

export function Logo() {
    return (
        <View>
            <Text style={styles.title}>Sec Pass Generator</Text>
            <Image
                source={imgLogo}
                style={{
                    resizeMode: 'contain',
                    height: 320
                }}
            />

        </View>
    )
}   